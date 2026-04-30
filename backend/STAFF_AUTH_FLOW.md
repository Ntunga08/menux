# Staff Invite and Password Flow

This document defines how staff accounts and passwords should be handled in SmartTable.

## Goal

- Owner can add staff members without knowing staff passwords.
- Staff members create their own password securely.
- Password changes happen only in dedicated password flows.

## Recommended Flow

1. Owner creates a staff invitation.
2. Backend stores staff row with:
   - `passwordHash = null`
   - `inviteToken = <secure random token>`
   - `inviteAccepted = false`
3. Backend sends invite link to staff email:
   - Example: `/staff/accept-invite?token=<inviteToken>`
4. Staff opens link and sets password.
5. Backend hashes password with bcrypt and updates:
   - `passwordHash = <bcrypt hash>`
   - `inviteAccepted = true`
   - `inviteToken = null`
   - `isActive = true`
6. Staff logs in with email and password.

## Why This Is Better Than Default Passwords

- Owner never sees staff password.
- No shared temporary credentials over chat.
- Lower risk of password reuse and leaks.
- Cleaner audit and account ownership model.

## API Contract (Suggested)

### 1) Owner creates staff invite

- Method: `POST /api/staff`
- Auth: Required (`Bearer <owner-jwt>`)
- Role: Owner only

Request body:

```json
{
  "restaurantId": 12,
  "name": "John",
  "email": "john@example.com",
  "role": "WAITER"
}
```

Server actions:

1. Verify `restaurantId` belongs to logged-in owner.
2. Create `inviteToken` using secure random bytes.
3. Save staff record with null password hash.
4. Send invite email/link.

Response:

```json
{
  "message": "Staff invited successfully",
  "data": {
    "id": 10,
    "email": "john@example.com",
    "role": "WAITER",
    "inviteAccepted": false
  }
}
```

### 2) Staff accepts invite and sets password

- Method: `POST /api/staff/accept-invite`
- Auth: Not required (token-based)

Request body:

```json
{
  "token": "INVITE_TOKEN_HERE",
  "password": "StrongPassword123!"
}
```

Validation:

1. Token exists and is still valid.
2. Password meets policy.

Server actions:

1. Hash password (`bcrypt.hash(password, saltRounds)`).
2. Update staff record with hash and accepted flags.

Response:

```json
{
  "message": "Invite accepted successfully"
}
```

### 3) Staff login

- Method: `POST /api/auth/login`
- Auth: Not required

Request body:

```json
{
  "email": "john@example.com",
  "password": "StrongPassword123!"
}
```

Server checks:

1. Staff exists.
2. `inviteAccepted === true`.
3. `passwordHash` exists.
4. Password matches hash.

Response:

```json
{
  "message": "Login successful",
  "data": {
    "accessToken": "JWT_TOKEN"
  }
}
```

## Service Layer Rules

In `staff.service.js`:

- `createStaffMember` may set `passwordHash` only as `null` for invite flow.
- `updateStaffMember` must NOT update:
  - `passwordHash`
  - `inviteToken`
- Password should only be written in:
  - `acceptStaffInvite(staffId, passwordHash)`
  - future dedicated `changeStaffPassword(...)` function

## Security Checklist

1. Use `bcrypt` for hashing (`10-12` salt rounds).
2. Never return `passwordHash` in API responses.
3. Never log raw passwords.
4. Invalidate invite token after first successful use.
5. Optionally add invite expiry timestamp in schema for better security.
6. Rate-limit invite acceptance and login endpoints.

## Optional Schema Improvement

To support token expiry, add fields:

- `inviteExpiresAt DateTime?`

Then reject expired tokens in `accept-invite` endpoint.

## Owner Experience Summary

Owner flow is simple:

1. Add staff email and role.
2. System sends invite link.
3. Staff sets own password.
4. Owner never handles password directly.

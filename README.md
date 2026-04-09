# SmartTable

SmartTable is a restaurant backend API for managing authentication, restaurant info, staff, menu, tables, orders, and customer requests.

## Project Structure

- `backend/` - Node.js + Express API with Prisma and PostgreSQL
- `frontend/` - Frontend app placeholder (currently empty)

## Backend Quick Start

1. Go to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create environment file:
   ```bash
   cp .env.example .env
   ```
   If `.env.example` does not exist yet, create `.env` manually with:
   ```env
   PORT=4000
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=postgresql://username:password@localhost:5433/smarttable
   ```
4. Start PostgreSQL with Docker:
   ```bash
   docker compose up -d
   ```
5. Run Prisma migrations:
   ```bash
   pnpm prisma migrate deploy
   ```
6. Start the API in development mode:
   ```bash
   pnpm dev
   ```

Server will run at:
- `http://localhost:<PORT>`

Health check:
- `GET /health`

## Available API Route Groups

- `/api/auth`
- `/api/restaurant`
- `/api/staff`
- `/api/menu`
- `/api/tables`
- `/api/orders`
- `/api/requests`

## Scripts

From `backend/`:

- `pnpm dev` - Start server with watch mode
- `pnpm start` - Start server normally

## Notes

- Required backend environment variables: `PORT`, `JWT_SECRET`, `DATABASE_URL`
- Keep secrets in `.env` and do not commit them

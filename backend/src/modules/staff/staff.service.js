import prisma from '../../utils/prisma.js';

const staffPublicSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  fcmToken: true,
  inviteAccepted: true,
  isActive: true,
  restaurantId: true,
  createdAt: true,
  updatedAt: true
};

export const getStaffMembers = async (filters = {}) => {
  const where = {};

  if (typeof filters.restaurantId === 'number') {
    where.restaurantId = filters.restaurantId;
  }

  if (filters.role) {
    where.role = filters.role;
  }

  if (typeof filters.isActive === 'boolean') {
    where.isActive = filters.isActive;
  }

  if (typeof filters.inviteAccepted === 'boolean') {
    where.inviteAccepted = filters.inviteAccepted;
  }

  return prisma.staff.findMany({
    where,
    select: staffPublicSelect,
    orderBy: { createdAt: 'desc' }
  });
};

export const getStaffMembersByRestaurant = async (restaurantId) => {
  return prisma.staff.findMany({
    where: { restaurantId },
    select: staffPublicSelect,
    orderBy: { createdAt: 'desc' }
  });
};

export const getStaffMember = async (staffId) => {
  return prisma.staff.findUnique({
    where: { id: staffId },
    select: staffPublicSelect
  });
};

export const getStaffByEmail = async (restaurantId, email) => {
  return prisma.staff.findUnique({
    where: {
      restaurantId_email: {
        restaurantId,
        email
      }
    }
  });
};

export const getStaffByInviteToken = async (inviteToken) => {
  return prisma.staff.findUnique({
    where: { inviteToken }
  });
};

export const createStaffMember = async (data) => {
  return prisma.staff.create({
    data: {
      name: data.name ?? null,
      email: data.email,
      passwordHash: data.passwordHash ?? null,
      role: data.role,
      fcmToken: data.fcmToken ?? null,
      inviteToken: data.inviteToken ?? null,
      inviteAccepted: data.inviteAccepted ?? false,
      isActive: data.isActive ?? true,
      restaurantId: data.restaurantId
    },
    select: staffPublicSelect
  });
};

export const updateStaffMember = async (staffId, data) => {
  return prisma.staff.update({
    where: { id: staffId },
    data: {
      name: data.name,
      email: data.email,
      role: data.role,
      fcmToken: data.fcmToken,
      isActive: data.isActive,
      inviteAccepted: data.inviteAccepted
    },
    select: staffPublicSelect
  });
};

export const updateStaffStatus = async (staffId, isActive) => {
  return prisma.staff.update({
    where: { id: staffId },
    data: { isActive },
    select: staffPublicSelect
  });
};

export const acceptStaffInvite = async (staffId, passwordHash) => {
  return prisma.staff.update({
    where: { id: staffId },
    data: {
      passwordHash,
      inviteAccepted: true,
      inviteToken: null,
      isActive: true
    },
    select: staffPublicSelect
  });
};

export const deleteStaffMember = async (staffId) => {
  return prisma.staff.delete({
    where: { id: staffId },
    select: staffPublicSelect
  });
};

export const staffExists = async (staffId) => {
  const staff = await prisma.staff.findUnique({
    where: { id: staffId },
    select: { id: true }
  });

  return !!staff;
};
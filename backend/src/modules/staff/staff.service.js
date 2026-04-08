import prisma from '../../utils/prisma.js';

export const getStaffMembers = async () => {
  return prisma.user.findMany({
    where: { role: 'STAFF' },
    orderBy: { id: 'asc' }
  });
};

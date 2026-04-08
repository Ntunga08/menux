import prisma from '../../config/db.js';

export const findUsers = async () => {
  return prisma.user.findMany({ orderBy: { id: 'asc' } });
};

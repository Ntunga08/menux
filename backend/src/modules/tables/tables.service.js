import prisma from '../../utils/prisma.js';

export const getTables = async () => {
  return prisma.table.findMany({
    orderBy: { tableNumber: 'asc' }
  });
};

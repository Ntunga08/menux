import prisma from '../../config/db.js';

export const findTables = async () => {
  return prisma.table.findMany({ orderBy: { tableNumber: 'asc' } });
};

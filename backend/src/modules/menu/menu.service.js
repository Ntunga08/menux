import prisma from '../../utils/prisma.js';

export const getMenu = async () => {
  return prisma.menuCategory.findMany({
    include: { items: true },
    orderBy: { sortOrder: 'asc' }
  });
};

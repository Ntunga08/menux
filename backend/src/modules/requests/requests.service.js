import prisma from '../../utils/prisma.js';

export const getRequests = async () => {
  return prisma.serviceRequest.findMany({
    include: {
      table: true,
      resolvedBy: true
    },
    orderBy: { createdAt: 'desc' }
  });
};

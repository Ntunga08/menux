import prisma from '../../utils/prisma.js';

const restaurantInclude = {
  owner: true,
  staff: true,
  tables: true,
  categories: {
    include: {
      items: true
    }
  },
  orders: true
};

export const createRestaurant = async (data) => {
  try {
    return await prisma.restaurant.create({
      data: {
        name: data.name,
        logoUrl: data.logoUrl ?? null,
        address: data.address ?? null,
        currency: data.currency ?? 'USD',
        subdomain: data.subdomain,
        ownerId: data.ownerId
      }
    });
  } catch (error) {
    throw new Error(`Failed to create restaurant: ${error.message}`);
  }
};

export const getRestaurant = async (restaurantId) => {
  try {
    return await prisma.restaurant.findUnique({
      where: { id: restaurantId },
      include: restaurantInclude
    });
  } catch (error) {
    throw new Error(`Failed to fetch restaurant: ${error.message}`);
  }
};

export const getAllRestaurants = async () => {
  try {
    return await prisma.restaurant.findMany({
      orderBy: { createdAt: 'desc' },
      include: { owner: true }
    });
  } catch (error) {
    throw new Error(`Failed to fetch restaurants: ${error.message}`);
  }
};

export const updateRestaurant = async (restaurantId, data) => {
  try {
    return await prisma.restaurant.update({
      where: { id: restaurantId },
      data: {
        name: data.name,
        logoUrl: data.logoUrl,
        address: data.address,
        currency: data.currency,
        subdomain: data.subdomain
      }
    });
  } catch (error) {
    throw new Error(`Failed to update restaurant: ${error.message}`);
  }
};

export const deleteRestaurant = async (restaurantId) => {
  try {
    return await prisma.restaurant.delete({
      where: { id: restaurantId }
    });
  } catch (error) {
    throw new Error(`Failed to delete restaurant: ${error.message}`);
  }
};

export const getRestaurantWithDetails = async (restaurantId) => {
  try {
    return await prisma.restaurant.findUnique({
      where: { id: restaurantId },
      include: restaurantInclude
    });
  } catch (error) {
    throw new Error(`Failed to fetch restaurant details: ${error.message}`);
  }
};

export const getRestaurantByOwner = async (ownerId) => {
  try {
    return await prisma.restaurant.findMany({
      where: { ownerId },
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    throw new Error(`Failed to fetch restaurant by owner: ${error.message}`);
  }
};

export const updateRestaurantStatus = async (restaurantId, isActive) => {
  try {
    return await prisma.restaurant.update({
      where: { id: restaurantId },
      data: { isActive }
    });
  } catch (error) {
    throw new Error(`Failed to update restaurant status: ${error.message}`);
  }
};

export const restaurantExists = async (restaurantId) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: restaurantId },
      select: { id: true }
    });
    return !!restaurant;
  } catch (error) {
    throw new Error(`Failed to check restaurant existence: ${error.message}`);
  }
};

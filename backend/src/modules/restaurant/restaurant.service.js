import  prisma from '../../utils/prisma.js';

export const getRestaurant = async (restaurantId) => {
  try {
    return await prisma.restaurant.findUnique({
      where: { id: restaurantId }
    });
  } catch (error) {
    throw new Error(`Failed to fetch restaurant: ${error.message}`);
  }
};


export const createRestaurant = async (data) => {
  try {
    return await prisma.restaurant.create({
      data : {
        name : data.name,
        location : data.location,
        phone : data.phone,
        email : data.email,
      }
    });
  } catch (error) {
    throw new Error(`Failed to create restaurant: ${error.message}`);
  }
}

export const getAllRestaurants = async () => {
  try  {
    return await prisma.restaurant.findMany();
  } catch (error) {
    throw new Error(`Failed to fetch restaurants: ${error.message}`);
  }
  };


  export const updateRestaurant = async (restaurantId, data) => {
    try {
      return await prisma.restaurant.update({
        where: { id: restaurantId },
        data : {
          name : data.name,
          location : data.location,
          phone : data.phone,
          email : data.email,
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
        include: {
          tables: true,
          menuItems: true,
          staff: true
        }
      });
    } catch (error) {
      throw new Error(`Failed to fetch restaurant details: ${error.message}`);  
    }

  };


  export const getRestaurantByOwner = async (ownerId) => {
    try {
      return  await prisma.restaurant.findFirst({
        where: {
          staff :{
            some: {
              id: ownerId,
              role: 'OWNER'
            }
          }
        }
      });
    } catch (error) {
      throw new Error(`Failed to fetch restaurant by owner: ${error.message}`);

    }

  };


export const updateRestaurantStatus = async (restaurantId, status) => {
  try {
    return await prisma.restaurant.update({
      where: { id: restaurantId },
      data: { status }
    });
  } catch (error) {
    throw new Error(`Failed to update restaurant status: ${error.message}`);
  }
};


export const  restaurantExists = async (restaurantId) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { id: restaurantId }
    });
    return !!restaurant;
  } catch (error) {
    throw new Error(`Failed to check restaurant existence: ${error.message}`);
  }
};
//   export const getRestaurantProfile = async () => {









// export const getRestaurantProfile = async () => {
//   return {
//     name: 'SmartTable Restaurant',
//     status: 'active'
//   };
// };

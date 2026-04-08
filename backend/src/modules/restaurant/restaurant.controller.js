import { getRestaurantProfile } from './restaurant.service.js';
import { sendSuccess } from '../../utils/response.js';

export const getRestaurant = async (req, res, next) => {
  try {
    const data = await getRestaurantProfile();
    return sendSuccess(res, data, 'Restaurant profile loaded');
  } catch (error) {
    return next(error);
  }
};

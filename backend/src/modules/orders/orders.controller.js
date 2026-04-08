import { getOrders } from './orders.service.js';
import { sendSuccess } from '../../utils/response.js';

export const listOrders = async (req, res, next) => {
  try {
    const data = await getOrders();
    return sendSuccess(res, data, 'Orders loaded');
  } catch (error) {
    return next(error);
  }
};

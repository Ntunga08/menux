import { getMenu } from './menu.service.js';
import { sendSuccess } from '../../utils/response.js';

export const listMenu = async (req, res, next) => {
  try {
    const data = await getMenu();
    return sendSuccess(res, data, 'Menu loaded');
  } catch (error) {
    return next(error);
  }
};

import { getTables } from './tables.service.js';
import { sendSuccess } from '../../utils/response.js';

export const listTables = async (req, res, next) => {
  try {
    const data = await getTables();
    return sendSuccess(res, data, 'Tables loaded');
  } catch (error) {
    return next(error);
  }
};

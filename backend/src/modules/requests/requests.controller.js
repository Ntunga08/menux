import { getRequests } from './requests.service.js';
import { sendSuccess } from '../../utils/response.js';

export const listRequests = async (req, res, next) => {
  try {
    const data = await getRequests();
    return sendSuccess(res, data, 'Requests loaded');
  } catch (error) {
    return next(error);
  }
};

import { getStaffMembers } from './staff.service.js';
import { sendSuccess } from '../../utils/response.js';

export const listStaff = async (req, res, next) => {
  try {
    const data = await getStaffMembers();
    return sendSuccess(res, data, 'Staff list loaded');
  } catch (error) {
    return next(error);
  }
};

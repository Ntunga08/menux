import { getUsers } from './user.service.js';

export const listUsers = async (req, res, next) => {
  try {
    const data = await getUsers();
    return res.status(200).json({ data });
  } catch (error) {
    return next(error);
  }
};

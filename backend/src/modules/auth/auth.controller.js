import { loginUser } from './auth.service.js';

export const login = async (req, res, next) => {
  try {
    const data = await loginUser(req.body);
    return res.status(200).json({ message: 'Login successful', data });
  } catch (error) {
    return next(error);
  }
};

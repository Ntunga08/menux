import { getReservations } from './reservation.service.js';

export const listReservations = async (req, res, next) => {
  try {
    const data = await getReservations();
    return res.status(200).json({ data });
  } catch (error) {
    return next(error);
  }
};

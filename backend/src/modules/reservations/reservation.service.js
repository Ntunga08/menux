import { findReservations } from './reservation.repository.js';

export const getReservations = async () => {
  return findReservations();
};

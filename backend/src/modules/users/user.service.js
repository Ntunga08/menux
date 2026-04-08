import { findUsers } from './user.repository.js';

export const getUsers = async () => {
  return findUsers();
};

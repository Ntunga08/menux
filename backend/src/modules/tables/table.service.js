import { findTables } from './table.repository.js';

export const getTables = async () => {
  return findTables();
};

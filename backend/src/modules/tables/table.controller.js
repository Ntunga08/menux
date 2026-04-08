import { getTables } from './table.service.js';

export const listTables = async (req, res, next) => {
  try {
    const data = await getTables();
    return res.status(200).json({ data });
  } catch (error) {
    return next(error);
  }
};

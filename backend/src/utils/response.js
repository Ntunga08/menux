export const sendResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({ message, data });
};

export const sendSuccess = (res, data = null, message = 'Success') => {
  return sendResponse(res, 200, message, data);
};

export const sendCreated = (res, data = null, message = 'Created') => {
  return sendResponse(res, 201, message, data);
};

export const validateCreateUserPayload = (payload) => {
  if (!payload?.name || !payload?.email) {
    const error = new Error('name and email are required');
    error.statusCode = 400;
    throw error;
  }
};

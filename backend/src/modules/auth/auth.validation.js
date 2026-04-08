export const validateLoginPayload = (payload) => {
  if (!payload?.email || !payload?.password) {
    const error = new Error('email and password are required');
    error.statusCode = 400;
    throw error;
  }
};

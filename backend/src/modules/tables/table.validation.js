export const validateCreateTablePayload = (payload) => {
  if (!payload?.tableNumber || !payload?.qrCodeValue || !payload?.capacity) {
    const error = new Error('tableNumber, qrCodeValue and capacity are required');
    error.statusCode = 400;
    throw error;
  }
};

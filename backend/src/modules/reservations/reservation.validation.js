export const validateCreateReservationPayload = (payload) => {
  if (!payload?.tableId || !payload?.customerName || !payload?.reservedAt) {
    const error = new Error('tableId, customerName and reservedAt are required');
    error.statusCode = 400;
    throw error;
  }
};

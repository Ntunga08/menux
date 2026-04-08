export const broadcastNotification = (io, eventName, payload) => {
  if (io && typeof io.emit === 'function') {
    io.emit(eventName, payload);
  }
};

export const sendPushNotification = async (message) => {
  return {
    delivered: false,
    message
  };
};

export const initializeSocket = (server) => {
  const listeners = new Set();

  return {
    server,
    on(eventName, handler) {
      listeners.add({ eventName, handler });
    },
    emit(eventName, payload) {
      for (const listener of listeners) {
        if (listener.eventName === eventName) {
          listener.handler(payload);
        }
      }
    }
  };
};

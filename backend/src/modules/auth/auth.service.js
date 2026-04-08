export const loginUser = async (payload) => {
  return {
    token: 'replace-with-real-jwt',
    user: {
      email: payload?.email || null
    }
  };
};

export const notfound = (req, res) => {
  return res.status(404).json({ message: 'Not Found' });
};
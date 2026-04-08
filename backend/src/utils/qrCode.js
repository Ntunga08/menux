export const generateQrCode = async (value) => {
  return {
    value,
    imagePath: `/tmp/qrcodes/${encodeURIComponent(String(value))}.png`
  };
};

export const uploadQrCode = async (qrCodeData) => {
  return {
    ...qrCodeData,
    uploaded: true
  };
};

export const useWhatsApp = () => {
  const buildLink = (phone: string, message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return { buildLink };
};

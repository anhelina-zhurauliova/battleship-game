export const generateId = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);

  return parseInt(timestamp.toString() + randomNum.toString());
};

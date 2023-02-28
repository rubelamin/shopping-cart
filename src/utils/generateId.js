export const generateId = (number) => {
  const stringnumber = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i <= number; i++) {
    id += stringnumber.charAt(Math.floor(Math.random() * number));
  }
  return id;
};

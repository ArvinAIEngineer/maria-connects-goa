export const getCurrentDate = (): Date => {
  return new Date();
};

export const isSameDay = (d1: Date, d2: Date): boolean => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

export const isSameMonth = (d1: Date, d2: Date): boolean => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth();
};

export const isUpcoming = (eventDate: Date): boolean => {
  return eventDate >= getCurrentDate();
};

export const formatToIST = (date: Date): string => {
  return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
};
export const getOrdinals = (num) => {
  if (typeof num === 'string') num = +num;
  switch (num) {
    case 1:
    case 21:
      return 'st';
    case 2:
    case 22:
      return 'nd';
    case 3:
    case 23:
      return 'rd';
    default:
      return 'th';
  }
};

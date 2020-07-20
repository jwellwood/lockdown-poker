// TODO not currently working

export const parseDate = (rawDate) => {
  const date = new Date(rawDate);
  return date.toDateString().substring(4);
};

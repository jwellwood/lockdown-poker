export const parseDate = (rawDate) => {
  const timestamp = rawDate.seconds;
  return new Date(timestamp * 1000).toDateString();
};

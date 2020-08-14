import format from 'date-fns/format';
import formatISO from 'date-fns/formatISO';

export const parseDateAndTime = (rawDate) => {
  const timestamp = rawDate.seconds;
  return format(timestamp * 1000, `MMMM do yyyy HH:mm`);
};

export const parseDate = (rawDate) => {
  const timestamp = rawDate.seconds;
  return format(timestamp * 1000, `MMMM do yyyy`);
};

export const getDateFromTimestamp = (rawDate) => {
  const timestamp = rawDate.seconds;
  return new Date(timestamp * 1000);
};

export const parseDateAsISOString = (rawDate) => {
  const timestamp = rawDate.seconds;
  const nd = new Date(timestamp * 1000);
  // date needed in ISO format for isPast() etc functions
  return formatISO(nd);
};

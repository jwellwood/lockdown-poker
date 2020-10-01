import format from 'date-fns/format';
import { IRawDate } from 'types';

export const parseDate = (rawDate: IRawDate) => {
  const timestamp = rawDate.seconds;
  return format(timestamp * 1000, `MMMM do yyyy`);
};

export const parseDateAndTime = (rawDate: IRawDate) => {
  const timestamp = rawDate.seconds;
  return format(timestamp * 1000, `MMMM do yyyy HH:mm`);
};

export const getDateFromTimestamp = (rawDate: IRawDate) => {
  const timestamp = rawDate.seconds;
  return new Date(timestamp * 1000);
};

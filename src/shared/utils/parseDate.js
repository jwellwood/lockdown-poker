import moment from 'moment';

export const parseDate = (rawDate) => {
  const timestamp = rawDate.seconds;
  return moment(timestamp * 1000).format('MMMM Do YYYY, H:mm');
};

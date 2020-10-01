import {
  parseDate,
  parseDateAndTime,
  getDateFromTimestamp,
} from '../functions';

const fakeDate = {
  seconds: 1234567890,
  nanoseconds: 0,
};
describe('parseDate tests', () => {
  test('should return a parsed date when passed a rawDate object', () => {
    expect(parseDate(fakeDate)).toBe('February 14th 2009');
  });
  test('should return a parsed date and time when passed a rawDate object', () => {
    expect(parseDateAndTime(fakeDate)).toBe('February 14th 2009 00:31');
  });
  test('should return a new Date object when passed a timestamp', () => {
    expect(JSON.stringify(getDateFromTimestamp(fakeDate))).toBe(
      '"2009-02-13T23:31:30.000Z"'
    );
  });
});

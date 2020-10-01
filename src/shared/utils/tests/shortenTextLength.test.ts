import { shortenTextLength } from '../functions';

describe('shortenTextLength tests', () => {
  test('should return the original string if it is shorter than the limit', () => {
    const string = '';
    const stringWord = 'short';
    expect(shortenTextLength(string)).toBe('');
    expect(shortenTextLength(stringWord)).toBe('short');
  });
  test('should cut the length of the string if it is above the limit', () => {
    const string = 'longStringHere';
    expect(shortenTextLength(string)).toBe('longString...');
  });
});

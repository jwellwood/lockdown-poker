import { getPercentage } from '../functions';

describe('getPercentage tests', () => {
  test('should return correct percentage for positive numbers', () => {
    expect(getPercentage(100, 100)).toBe(100);
    expect(getPercentage(100, 50)).toBe(50);
    expect(getPercentage(50, 25)).toBe(50);
  });
});

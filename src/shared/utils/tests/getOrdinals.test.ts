import { getOrdinals } from '../functions/index';

describe('getOrdinals function tests', () => {
  test('works with strings', () => {
    expect(getOrdinals('1')).toBe('st');
    expect(getOrdinals('2')).toBe('nd');
    expect(getOrdinals('3')).toBe('rd');
    expect(getOrdinals('4')).toBe('th');
  });
  test('works with numbers', () => {
    expect(getOrdinals(1)).toBe('st');
    expect(getOrdinals(2)).toBe('nd');
    expect(getOrdinals(3)).toBe('rd');
    expect(getOrdinals(4)).toBe('th');
  });
  test('returns th for numbers outside range', () => {
    expect(getOrdinals(0)).toBe('th');
    expect(getOrdinals(100)).toBe('th');
    expect(getOrdinals(true)).toBe('th');
    expect(getOrdinals(false)).toBe('th');
  });
});

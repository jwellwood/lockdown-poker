// Name is stored as ID, so we need to convert it back in the view
import { getNameFromId } from '../functions';
import { mockPlayersList } from './MOCK_DATA';

const mockPlayerOne = {
  name: '1',
};
const mockPlayerFour = {
  name: '4',
};
const mockPlayerUnknown = {
  name: undefined,
};

describe('getNameFromId tests', () => {
  test('should return the correct name when passed id', () => {
    expect(getNameFromId(mockPlayersList, mockPlayerOne)).toBe('Name1');
  });
  test('should return the correct name when passed id', () => {
    expect(getNameFromId(mockPlayersList, mockPlayerFour)).toBe('Name4');
  });
  test('should return empty string when player not found', () => {
    expect(getNameFromId(mockPlayersList, mockPlayerUnknown)).toBe('');
  });
});

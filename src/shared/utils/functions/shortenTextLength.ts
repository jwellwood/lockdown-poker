export const shortenTextLength = (str: string): string => {
  if (str.length > 10) {
    return `${str.slice(0, 10)}...`;
  }
  return str;
};

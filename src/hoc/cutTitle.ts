export const cutTitle = (fullTitle: string): string => {
  const maxLength = 50;
  return fullTitle.length > maxLength
    ? `${fullTitle.slice(0, maxLength)}...`
    : fullTitle;
};

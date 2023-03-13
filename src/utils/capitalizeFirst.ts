export const captializeFirst = (str: string | undefined) => {
  if (str) {
    return str
      .charAt(0)
      .toLocaleUpperCase()
      .concat(str.slice(1).toLocaleLowerCase());
  }
  return " ";
};

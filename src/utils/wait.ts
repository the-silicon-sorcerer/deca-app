export const wait = (time: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      return res(void "");
    }, time);
  });
};

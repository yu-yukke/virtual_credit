// seed用関数

export const randFromArray = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
};

export const randBoolean = (): boolean => {
  // 80%の確率でtrueを返す
  return Math.random() < 0.8;
};

// seed用関数

export const randFromArray = <T>(array: T[]): T => {
  const index = Math.floor(Math.random() * array.length);

  return array[index];
};

export const randBoolean = (probability: number): boolean => {
  // (与えた数字 * 100)% でtrueを返す
  return Math.random() < probability;
};

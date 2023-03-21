const DEFAULT_MAX_NUMBER = 10;

// eslint-disable-next-line import/prefer-default-export
export const getRandomInt = (maxValue = DEFAULT_MAX_NUMBER) => Math.floor(Math.random() * maxValue);

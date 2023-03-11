const DEFAULT_MAX_NUMBER = 10;

// eslint-disable-next-line import/prefer-default-export
export function getRandomNumber(maxValue = DEFAULT_MAX_NUMBER) {
  return Math.ceil(Math.random() * maxValue);
}

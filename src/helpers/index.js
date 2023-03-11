const DEFAULT_MAX_NUMBER = 10;

// eslint-disable-next-line import/prefer-default-export
export function getRandomInt(maxValue = DEFAULT_MAX_NUMBER) {
  return Math.floor(Math.random() * maxValue);
}

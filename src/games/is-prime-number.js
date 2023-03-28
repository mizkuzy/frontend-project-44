import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MAX_RANDOM_NUMBER = 40;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  const numberSqrt = Math.sqrt(number);

  for (let divider = 2; divider <= numberSqrt; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const number = getRandomInt(MAX_RANDOM_NUMBER);

  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  run(gameDescription, generateGameData);
};

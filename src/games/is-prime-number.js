import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
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
  const number = getRandomInt(0, 40);

  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  run(gameDescription, generateGameData);
};

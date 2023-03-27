import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const MAX_NUMBER = 1000;

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const number = getRandomInt(MAX_NUMBER);

  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  run(gameDescription, generateGameData);
};

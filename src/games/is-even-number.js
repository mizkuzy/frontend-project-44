import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

let answer;

const MAX_NUMBER = 1000;

const isEven = (number) => number % 2 === 0;

const generateQuestion = () => {
  const number = getRandomInt(MAX_NUMBER);

  answer = isEven(number) ? 'yes' : 'no';

  return number;
};

const generateGameData = () => {
  const question = generateQuestion();

  return [question, answer];
};

export default () => {
  run(gameDescription, generateGameData);
};

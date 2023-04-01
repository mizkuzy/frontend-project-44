import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateGameData = () => {
  //  we don't consider zero value for GCD
  const operand1 = getRandomInt(1, 10);
  const operand2 = getRandomInt(1, 10);

  const answer = getGcd(operand1, operand2).toString();

  const question = `${operand1} ${operand2}`;

  return [question, answer];
};

export default () => {
  run(gameDescription, generateGameData);
};

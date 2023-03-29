import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers';

const getGcd = (a, b) => {
  let divisor;

  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

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

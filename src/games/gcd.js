import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers';

let answer;

const getGcd = (a, b) => {
  let divisor;

  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const generateQuestion = () => {
  //  we don't consider zero value for GCD
  const operand1 = getRandomInt() + 1;
  const operand2 = getRandomInt() + 1;

  answer = getGcd(operand1, operand2);

  return `${operand1} ${operand2}`;
};

const generateGameData = () => {
  const question = generateQuestion();

  return [question, answer.toString()];
};

export default () => {
  run(gameDescription, generateGameData);
};

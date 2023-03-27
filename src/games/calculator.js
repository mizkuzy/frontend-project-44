import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'What is the result of the expression?';

const OPERANDS = ['+', '-', '*'];

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiple = (a, b) => a * b;

const calculate = (operator, operand1, operand2) => {
  if (operator === '+') {
    return sum(operand1, operand2);
  }

  if (operator === '-') {
    return subtract(operand1, operand2);
  }

  if (operator === '*') {
    return multiple(operand1, operand2);
  }

  throw new Error(`Unexpected Operator ${operator}`);
};

const generateGameData = () => {
  const operationCode = getRandomInt(OPERANDS.length);
  const operand = OPERANDS[operationCode];
  const operand1 = getRandomInt();
  const operand2 = getRandomInt();

  const question = `${operand1} ${operand} ${operand2}`;

  const answer = calculate(operand, operand1, operand2);

  return [question, answer.toString()];
};

export default () => {
  run(gameDescription, generateGameData);
};

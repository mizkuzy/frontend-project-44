import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'What is the result of the expression?';

const OPERANDS = ['+', '-', '*'];

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiple = (a, b) => a * b;

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return sum(operand1, operand2);
    case '-':
      return subtract(operand1, operand2);
    case '*':
      return multiple(operand1, operand2);
    default:
      throw new Error(`Unexpected Operator ${operator}`);
  }
};

const generateGameData = () => {
  const operationIndex = getRandomInt(0, OPERANDS.length);
  const operand = OPERANDS[operationIndex];
  const operand1 = getRandomInt(0, 10);
  const operand2 = getRandomInt(0, 10);

  const question = `${operand1} ${operand} ${operand2}`;

  const answer = calculate(operand, operand1, operand2).toString();

  return [question, answer];
};

export default () => {
  run(gameDescription, generateGameData);
};

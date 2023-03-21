import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'What is the result of the expression?';

const OPERANDS_NUMBER = 3;

let answer;
let questionDescription;

const saveQuestionDescription = (operator, operand1, operand2) => {
  questionDescription = `${operand1} ${operator} ${operand2}`;
};

const sum = (a, b) => {
  saveQuestionDescription('+', a, b);

  return a + b;
};

const subtract = (a, b) => {
  saveQuestionDescription('-', a, b);
  return a - b;
};

const multiple = (a, b) => {
  saveQuestionDescription('*', a, b);
  return a * b;
};

const getOperationFunction = () => {
  const operationCode = getRandomInt(OPERANDS_NUMBER);

  switch (operationCode) {
    case 0: return sum;
    case 1: return subtract;
    case 2: return multiple;
    default:
      throw new Error(`Unexpected Operation code ${operationCode}`);
  }
};

const generateQuestion = () => {
  const operationFunction = getOperationFunction();

  const operand1 = getRandomInt();
  const operand2 = getRandomInt();

  answer = operationFunction(operand1, operand2);
};

const generateGameData = () => {
  generateQuestion();

  return [questionDescription, answer.toString()];
};

export default () => {
  run(gameDescription, generateGameData);
};

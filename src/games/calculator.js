import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const OPERANDS_NUMBER = 3;

let answer;
let question;

function saveQuestionDescription(operator, operand1, operand2) {
  question = `${operand1} ${operator} ${operand2}`;
}

function sum(a, b) {
  saveQuestionDescription('+', a, b);

  return a + b;
}

function subtract(a, b) {
  saveQuestionDescription('-', a, b);
  return a - b;
}

function multiple(a, b) {
  saveQuestionDescription('*', a, b);
  return a * b;
}

function getOperationFunction() {
  const operationCode = getRandomInt(OPERANDS_NUMBER);

  switch (operationCode) {
    case 0: return sum;
    case 1: return subtract;
    case 2: return multiple;
    default:
      throw new Error(`Unexpected Operation code ${operationCode}`);
  }
}

export function getQuestion() {
  const operationFunction = getOperationFunction();

  const operand1 = getRandomInt();
  const operand2 = getRandomInt();

  answer = operationFunction(operand1, operand2);

  return question;
}

export function getCorrectAnswer() {
  return answer.toString();
}

export default function startCalculatorGame() {
  const gameDescription = 'What is the result of the expression?';

  run(gameDescription, getQuestion, getCorrectAnswer);
}

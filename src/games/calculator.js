import run from '../game.js';

const MAX_OPERAND_NUMBER = 10;
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
  const operationCode = Math.floor(Math.random() * OPERANDS_NUMBER);

  switch (operationCode) {
    case 0: return sum;
    case 1: return subtract;
    case 2: return multiple;
    default:
      throw new Error(`Unexpected Operation code ${operationCode}`);
  }
}

function getOperand() {
  return Math.ceil(Math.random() * MAX_OPERAND_NUMBER);
}

export function getQuestion() {
  const operationFunction = getOperationFunction();

  const operand1 = getOperand();
  const operand2 = getOperand();

  answer = operationFunction(operand1, operand2);

  return question;
}

export function getCorrectAnswer() {
  return answer.toString();
}

export function getGameName() {
  return 'What is the result of the expression?';
}

export default function startCalculatorGame() {
  const gameDescription = getGameName();

  run(gameDescription, getQuestion, getCorrectAnswer);
}

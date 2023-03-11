import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

let answer;

const MAX_NUMBER = 1000;
const IS_EVEN = 'yes';
const NOT_IS_EVEN = 'no';

export function getQuestion() {
  const number = getRandomInt(MAX_NUMBER);
  answer = number % 2 === 0 ? IS_EVEN : NOT_IS_EVEN;

  return number;
}

export function getCorrectAnswer() {
  return answer;
}

export function getGameName() {
  return `Answer "${IS_EVEN}" if the number is even, otherwise answer "${NOT_IS_EVEN}"`;
}

export default function startEvenNumberGame() {
  const gameDescription = getGameName();
  run(gameDescription, getQuestion, getCorrectAnswer);
}

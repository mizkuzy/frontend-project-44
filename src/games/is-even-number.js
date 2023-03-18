import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

let answer;

const MAX_NUMBER = 1000;

function isEven(number) {
  return number % 2 === 0;
}

export function getQuestion() {
  const number = getRandomInt(MAX_NUMBER);

  answer = isEven(number) ? 'yes' : 'no';

  return number;
}

export function getCorrectAnswer() {
  return answer;
}

export default function startEvenNumberGame() {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  run(gameDescription, getQuestion, getCorrectAnswer);
}

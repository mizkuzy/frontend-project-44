import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

let answer;

function getGcd(a, b) {
  let divisor;

  for (let i = 1; i <= a && i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }

  return divisor;
}

export function getQuestion() {
  //  we don't consider zero value for GCD
  const operand1 = getRandomInt() + 1;
  const operand2 = getRandomInt() + 1;

  answer = getGcd(operand1, operand2);

  return `${operand1} ${operand2}`;
}

export function getCorrectAnswer() {
  return answer.toString();
}

export function getGameName() {
  return 'Find the greatest common divisor of given numbers';
}

export default function startGcdGame() {
  const gameDescription = getGameName();

  run(gameDescription, getQuestion, getCorrectAnswer);
}

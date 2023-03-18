import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const MAX_RANDOM_NUMBER = 40;

let answer;

function isPrime(number) {
  if (number === 1) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
}

export function getAnswer() {
  return answer;
}

export function getQuestion() {
  const number = getRandomInt(MAX_RANDOM_NUMBER);

  answer = isPrime(number) ? 'yes' : 'no';

  return number;
}

export default function startPrimeNumberGame() {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  run(gameDescription, getQuestion, getAnswer);
}

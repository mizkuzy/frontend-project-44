import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const MAX_RANDOM_NUMBER = 40;

const IS_PRIME = 'yes';
const IS_NOT_PRIME = 'no';

let answer;

function isPrime(number) {
  if (number === 1) {
    return IS_NOT_PRIME;
  }

  if (number === 2) {
    return IS_PRIME;
  }

  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      return IS_NOT_PRIME;
    }
  }

  return IS_PRIME;
}

export function getAnswer() {
  return answer;
}

export function getQuestion() {
  const number = getRandomInt(MAX_RANDOM_NUMBER);

  answer = isPrime(number);

  return number;
}

export function getGameName() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no"';
}

export default function startPrimeNumberGame() {
  const gameDescription = getGameName();

  run(gameDescription, getQuestion, getAnswer);
}

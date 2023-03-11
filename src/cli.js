import { welcomeUser as greetUser } from './game.js';
import runEvenNumberGame from './games/is-even-number.js';
import runCalculatorGame from './games/calculator.js';
import runGcdGame from './games/gcd.js';
import runProgressionGame from './games/progression.js';
import runPrimeNumberGame from './games/is-prime-number.js';

export function welcomeUser() {
  return greetUser();
}

export function startEvenNumberGame() {
  runEvenNumberGame();
}

export function startCalculatorGame() {
  runCalculatorGame();
}

export function startGcdGame() {
  runGcdGame();
}

export function startProgressionGame() {
  runProgressionGame();
}

export function startPrimeNumberGame() {
  runPrimeNumberGame();
}

import { welcomeUser as greetUser } from './game.js';
import runEvenNumberGame from './games/is-even-number.js';
import runCalculatorGame from './games/calculator.js';

export function welcomeUser() {
  return greetUser();
}

export function startEvenNumberGame() {
  runEvenNumberGame();
}

export function startCalculatorGame() {
  runCalculatorGame();
}

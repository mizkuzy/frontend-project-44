import { welcomeUser as greetUser } from './game.js';
import runEvenNumberGame from './games/is-even-number.js';

export function welcomeUser() {
  return greetUser();
}

export function startEvenNumberGame() {
  runEvenNumberGame();
}

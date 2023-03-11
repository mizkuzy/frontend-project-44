import readlineSync from 'readline-sync';

export function printIt(input) {
  console.log(input);
}

export default function run() {
  printIt('Welcome to the Brain Game!');

  const userName = readlineSync.question('May I have your name? ');

  printIt(`Hello, ${userName}`);
}

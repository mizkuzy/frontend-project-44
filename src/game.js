import readlineSync from 'readline-sync';

const REQUIRED_WINS_NUMBER = 3;

let userName;

export function printIt(input) {
  console.log(input);
}

export function welcomeUser() {
  printIt('Welcome to the Brain Game!');

  userName = readlineSync.question('May I have your name? ');

  printIt(`Hello, ${userName}`);
}

export default function run(gameDescription, getQuestion, getCorrectAnswer) {
  let winsCount = 0;

  welcomeUser();

  printIt(gameDescription);

  while (winsCount < REQUIRED_WINS_NUMBER) {
    printIt(`Question: ${getQuestion()}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer();

    if (correctAnswer !== answer) {
      printIt(`${answer} is wrong answer ;(. Correct answer is ${correctAnswer}.`);
      printIt(`Let's try again, ${userName}!`);
      break;
    }

    winsCount += 1;
  }

  if (winsCount === REQUIRED_WINS_NUMBER) {
    printIt(`Congratulations, ${userName}!`);
  }
}

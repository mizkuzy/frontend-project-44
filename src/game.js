import readlineSync from 'readline-sync';

const REQUIRED_WINS_NUMBER = 3;

let userName;

const printIt = (input) => {
  console.log(input);
};

const welcomeUser = () => {
  printIt('Welcome to the Brain Games!');

  printIt(`Hello, ${userName}!`);
};

const getUsername = () => {
  userName = readlineSync.question('May I have your name? ');
};

export default (gameDescription, generateGameData) => {
  let winsCount = 0;

  getUsername();
  welcomeUser();

  printIt(gameDescription);

  while (winsCount < REQUIRED_WINS_NUMBER) {
    const [question, correctAnswer] = generateGameData();

    printIt(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      printIt(`${userAnswer} is wrong answer ;(. Correct answer is ${correctAnswer}.`);
      printIt(`Let's try again, ${userName}!`);
      break;
    }

    winsCount += 1;
  }

  if (winsCount === REQUIRED_WINS_NUMBER) {
    printIt(`Congratulations, ${userName}!`);
  }
};

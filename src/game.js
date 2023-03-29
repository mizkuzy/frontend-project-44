import readlineSync from 'readline-sync';

const REQUIRED_WINS_NUMBER = 3;

export default (gameDescription, generateGameData) => {
  let winsCount = 0;

  const userName = readlineSync.question('May I have your name? ');

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  while (winsCount < REQUIRED_WINS_NUMBER) {
    const [question, correctAnswer] = generateGameData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer is ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    winsCount += 1;
  }

  if (winsCount === REQUIRED_WINS_NUMBER) {
    console.log(`Congratulations, ${userName}!`);
  }
};

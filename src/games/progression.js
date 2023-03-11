import run from '../game.js';

const SEQUENCE_ELEMENTS_NUMBER = 10;
const MAX_DIFFERENCE_VALUE = 10;
const MAX_SEQUENCE_ITEM_VALUE = 1000;

let answer;

function generateSequenceElements() {
  const difference = Math.ceil(Math.random() * MAX_DIFFERENCE_VALUE);
  const firstElement = Math.floor(Math.random() * MAX_SEQUENCE_ITEM_VALUE);
  const sequenceElements = [firstElement];

  for (let i = 1; i < SEQUENCE_ELEMENTS_NUMBER; i += 1) {
    sequenceElements[i] = sequenceElements[i - 1] + difference;
  }

  return sequenceElements;
}

function getQuestionDescription(list, hideElementIndex) {
  const result = [];

  for (let i = 0; i < list.length; i += 1) {
    if (i === hideElementIndex) {
      result[i] = '__';
    } else {
      result[i] = list[i];
    }
  }

  return result.join(' ');
}

export function getQuestion() {
  const sequenceElements = generateSequenceElements();
  const missedElementIndex = Math.floor(Math.random() * SEQUENCE_ELEMENTS_NUMBER);

  answer = sequenceElements[missedElementIndex];

  return getQuestionDescription(sequenceElements, missedElementIndex);
}

export function getCorrectAnswer() {
  return answer.toString();
}

export function getGameName() {
  return 'What number is missing in the progression?';
}

export default function startProgressionGame() {
  const gameDescription = getGameName();

  run(gameDescription, getQuestion, getCorrectAnswer);
}

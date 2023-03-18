import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const SEQUENCE_ELEMENTS_NUMBER = 10;
const MAX_SEQUENCE_ITEM_VALUE = 1000;

let answer;

function generateSequenceElements(firstElement, step, sequenceElementsNumber) {
  const sequenceElements = [firstElement];

  for (let i = 1; i < sequenceElementsNumber; i += 1) {
    sequenceElements[i] = sequenceElements[i - 1] + step;
  }

  return sequenceElements;
}

function getQuestionDescription(list, hideElementIndex) {
  const result = [];

  for (let i = 0; i < list.length; i += 1) {
    if (i === hideElementIndex) {
      result[i] = '..';
    } else {
      result[i] = list[i];
    }
  }

  return result.join(' ');
}

export function getQuestion() {
  const difference = getRandomInt() + 1;
  const firstElement = getRandomInt(MAX_SEQUENCE_ITEM_VALUE);

  const sequenceElements = generateSequenceElements(
    firstElement,
    difference,
    SEQUENCE_ELEMENTS_NUMBER,
  );

  const missedElementIndex = getRandomInt(SEQUENCE_ELEMENTS_NUMBER);

  answer = sequenceElements[missedElementIndex];

  return getQuestionDescription(sequenceElements, missedElementIndex);
}

export function getCorrectAnswer() {
  return answer.toString();
}

export default function startProgressionGame() {
  const gameDescription = 'What number is missing in the progression?';

  run(gameDescription, getQuestion, getCorrectAnswer);
}

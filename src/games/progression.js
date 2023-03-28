import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'What number is missing in the progression?';

const SEQUENCE_ELEMENTS_NUMBER = 10;
const MAX_SEQUENCE_ITEM_VALUE = 1000;

const generateSequenceElements = (firstElement, step, sequenceElementsNumber) => {
  const sequenceElements = [firstElement];

  for (let i = 1; i < sequenceElementsNumber; i += 1) {
    sequenceElements[i] = sequenceElements[i - 1] + step;
  }

  return sequenceElements;
};

const generateGameData = () => {
  const difference = getRandomInt() + 1;
  const firstElement = getRandomInt(MAX_SEQUENCE_ITEM_VALUE);

  const sequenceElements = generateSequenceElements(
    firstElement,
    difference,
    SEQUENCE_ELEMENTS_NUMBER,
  );

  const missedElementIndex = getRandomInt(SEQUENCE_ELEMENTS_NUMBER);

  const answer = sequenceElements[missedElementIndex];

  sequenceElements[missedElementIndex] = '..';

  return [sequenceElements.join(' '), answer.toString()];
};

export default () => {
  run(gameDescription, generateGameData);
};

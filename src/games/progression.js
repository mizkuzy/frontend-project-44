import run from '../game.js';
import { getRandomInt } from '../helpers/index.js';

const gameDescription = 'What number is missing in the progression?';

const SEQUENCE_ELEMENTS_NUMBER = 10;

const generateSequenceElements = (firstElement, step, sequenceElementsNumber) => {
  const sequenceElements = [firstElement];

  for (let i = 1; i < sequenceElementsNumber; i += 1) {
    sequenceElements[i] = sequenceElements[i - 1] + step;
  }

  return sequenceElements;
};

const generateGameData = () => {
  const difference = getRandomInt(1, 10);
  const firstElement = getRandomInt(0, 1000);

  const sequenceElements = generateSequenceElements(
    firstElement,
    difference,
    SEQUENCE_ELEMENTS_NUMBER,
  );

  const missedElementIndex = getRandomInt(0, SEQUENCE_ELEMENTS_NUMBER);

  const answer = String(sequenceElements[missedElementIndex]);

  sequenceElements[missedElementIndex] = '..';

  return [sequenceElements.join(' '), answer];
};

export default () => {
  run(gameDescription, generateGameData);
};

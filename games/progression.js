#!/usr/bin/env node

import _ from 'lodash';

const { random } = _;

const description = 'What number is missing in the progression?';

const generateRound = () => {
  function createProgression(start, difference, length) {
    const progression = [];

    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * difference);
    }

    return progression;
  }

  const start = random(0, 100);
  const difference = random(2, 11);
  const length = 10;

  const progression = createProgression(start, difference, length);
  const targetIndex = random(0, length - 1);
  const newValue = '..';

  const newProgression = progression.map((element, index) => (
    index === targetIndex ? newValue : element
  ));

  const question = `${newProgression.join(' ')}`;
  const correctAnswer = progression[targetIndex].toString();

  return { question, correctAnswer };
};

export default { description, generateRound };

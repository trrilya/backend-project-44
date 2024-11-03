#!/usr/bin/env node
import _ from 'lodash';
const { random } = _;

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const a = random(0, 10);
  const b = random(0, 10);
 
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);

  return { question, correctAnswer };
};

export default { description, generateRound };
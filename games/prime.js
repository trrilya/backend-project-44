#!/usr/bin/env node
import _ from 'lodash';
const { random } = _;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const num = random(1, 100);
  function isPrime(num) {
    if (num <= 1) return 'yes';
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return 'no';
    }
    return 'yes';
  };

  const question = `${num}`;
  const correctAnswer = isPrime(num);

  return { question, correctAnswer };
};

export default { description, generateRound };

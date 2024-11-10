#!/usr/bin/env node
import _ from 'lodash';

const { random } = _;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const num = random(1, 100);

  function isPrime(n) {
    if (n <= 1) return 'no';
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) return 'no';
    }
    return 'yes';
  }

  const question = `${num}`;
  const correctAnswer = isPrime(num);

  return { question, correctAnswer };
};

export default { description, generateRound };

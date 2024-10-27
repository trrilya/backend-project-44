#!/usr/bin/env node
import _ from 'lodash';
const { random } = _;

const description = 'What is the result of the expression?';

const generateRound = () => {
  const num1 = random(0, 10);
  const num2 = random(0, 10);
  const operations = ['+', '-', '*'];
  const operation = operations[random(0, 2)];

  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = eval(question);

  return { question, correctAnswer };
};

export default { description, generateRound };
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
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  return { question, correctAnswer: correctAnswer.toString() };
};

export default { description, generateRound };
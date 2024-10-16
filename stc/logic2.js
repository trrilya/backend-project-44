#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash'; 
const { random } = _; 

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!
What is the result of the expression?`);
  return userName;
};

const gameCalc = (userName, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const num = random(0, 10);
  const num2 = random(0, 10);
  const operations= [`${num} * ${num2}`, `${num} + ${num2}`, `${num} - ${num2}`];
  const operation = operations [random(0, 2)]
  const userAnswer = readlineSync.question(`Question: ${operation} `);
  const result = eval(operation); 

  if (parseInt(userAnswer) === result) {
    console.log('Correct!');
    gameCalc(userName, counter + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${userName}!`);
    return; 
  }
};

export { welcome, gameCalc };
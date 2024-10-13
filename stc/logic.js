#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash'; 
const { random } = _; 

const a = 'Answer "yes" if the number is even, otherwise answer "no".'
const b = 'What is the result of the expression?'



const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!
${rule}`);
  return userName;
};

const gameLoop = (userName, rule, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const num = random(0, 1000);
  const num2 = random(0, 1000);
  const operation = []
  const userAnswer = readlineSync.question(`Question: ${num} `);
  const isEven = num % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === isEven) {
    console.log('Correct!');
    gameLoop(userName, rule, counter + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
    console.log(`Let's try again, ${userName}!`);
    return; 
  }
};

export { welcome, gameLoop };
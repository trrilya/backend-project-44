#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash'; 
const { random } = _; 

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!
Answer "yes" if the number is even, otherwise answer "no".`);
  return userName;
};

const gameCalc = (userName, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const num = random(0, 1000);
  const num2 = random(0,1000);
  const operation = ['-', '+', '*'];
  const userAnswer = readlineSync.question(`Question: ${num} ${operation} ${num2}`);
  const isEven = num % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === isEven) {
    console.log('Correct!');
    gameLoop(userName, counter + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
    console.log(`Let's try again, ${userName}!`);
    return; 
  }
};

export { welcome, gameCalc };
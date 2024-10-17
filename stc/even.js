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

const gameEven = (userName, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const num = random(0, 1000);
  const userAnswer = readlineSync.question(`Question: ${num} `);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    gameEven(userName, counter + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return; 
  }
};

export { welcome, gameEven };
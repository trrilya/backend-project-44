#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { random } from 'lodash';

const answers = () => {
    console.log('Welcome to the Brain Games!');

    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
      
    const num = random(0, 1000);
    const UserAnswer = readlineSync.question(`Question: ${num} `);
    console.log('Your answer: ' + UserAnswer);
       
    const num2 = random(0, 1000);
    const UserAnswer2 = readlineSync.question(`Question: ${num2} `);
    console.log('Your answer: ' + UserAnswer2);
    console.log(isEvenCheck(UserAnswer2, num2));

    const num3 = random(0, 1000);
    const UserAnswer3 = readlineSync.question(`Question: ${num3} `);
    console.log('Your answer: ' + UserAnswer3);
    console.log(isEvenCheck(UserAnswer3, num3));
  
    const userAnswers = [UserAnswer, UserAnswer2, UserAnswer3];
  
    for (const answer of userAnswers) {
      const isEvenCheck = (answer, number) => {
        let isEven
        if (number % 2 === 0) {
          isEven = 'yes';
        } else {
          isEven = 'no';
        }

      if (answer === isEven) {
          return 'Correct!'
     } else {
      throw new Error(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.
Let's try again, ${userName}`);  
    };
    console.log(isEvenCheck(UserAnswer, num));
  };

export default answers;
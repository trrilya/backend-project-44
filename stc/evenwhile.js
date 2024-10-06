#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash'; 
const { random } = _; 

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;

// Объявление функции для проверки ответа
const answers = () => {
  const num = random(0, 1000);
  const userAnswer = readlineSync.question(`Question: ${num} `);
  console.log('Your answer: ' + userAnswer);

  const isEvenCheck = (answer, number) => {
    const isEven = number % 2 === 0 ? 'yes' : 'no';

    if (answer === isEven) {
      return 'Correct!';
    } else {
     console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.
Let's try again, ${userName}`)
    }
  };

  console.log(isEvenCheck(userAnswer, num));
};

// Цикл, который вызывает функцию 5 раз
do {
  answers();
  counter++;
} while (counter < 3);

export default answers;

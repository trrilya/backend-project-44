#!/usr/bin/env node
import readlineSync from 'readline-sync';

const answers = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      };
      
    const UserAnswer = readlineSync.question(`Question: ${randomInteger(0, 1000)} `);
    console.log('Your answer: ' + UserAnswer);
};

export default answers;
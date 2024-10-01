#!/usr/bin/env node
import readlineSync from 'readline-sync';

const answers = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const number = readlineSync.question('Question: ');
    console.log('Hello, ' + userName + '!');
};
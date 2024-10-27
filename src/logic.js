#!/usr/bin/env node
import readlineSync from 'readline-sync';

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(game.description);

  let round = 0;
  const maxRounds = 3;

  while (round < maxRounds) {
    const { question, correctAnswer } = game.generateRound();
    const userAnswer = readlineSync.question(`Question: ${question} `);

    if (userAnswer.toLowerCase() === correctAnswer.toString()) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;

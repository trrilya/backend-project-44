import readlineSync from 'readline-sync';
import calcGame from '../games/calc.js';
import evenGame from '../games/even.js';
import gcdGame from '../games/gcd.js';
import progressionGame from '../games/progression.js';
import primeGame from '../games/prime.js';

const maxRounds = 3;

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(game.description);

  for (let round = 0; round < maxRounds; round += 1) {
    const { question, correctAnswer } = game.generateRound();
    const userAnswer = readlineSync.question(`Question: ${question} `);

    if (userAnswer.toLowerCase() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

const games = {
  calc: calcGame,
  even: evenGame,
  gcd: gcdGame,
  progression: progressionGame,
  prime: primeGame,
};

const gameName = process.argv[2];
const game = games[gameName];

if (!game) {
  console.log('Unknown game. Please choose from: calc, even, gcd, progression, prime.');
  process.exit(1);
}

runGame(game);

export { maxRounds };

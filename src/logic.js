import readlineSync from 'readline-sync';

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

export default runGame;
export { maxRounds };

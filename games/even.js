import _ from 'lodash';

const { random } = _;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = random(0, 1000);
  const question = number.toString();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default { description, generateRound };

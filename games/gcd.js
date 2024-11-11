import _ from 'lodash';

const { random } = _;

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = random(0, 10);
  const num2 = random(0, 10);

  function gcd(x, y) {
    let a = x;
    let b = y;
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return { question, correctAnswer };
};

export default { description, generateRound };

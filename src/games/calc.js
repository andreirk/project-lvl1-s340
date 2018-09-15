

const SIGNS = ['+', '-', '*'];
const gameQuestion = 'What is the result of the expression?.\n\n';

const randomIndexOfArray = arr => Math.floor(Math.random() * arr.length);

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const game = {
  getMainTask() {
    return gameQuestion;
  },
  play() {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    const randomIndexOfSignsArray = randomIndexOfArray(SIGNS);
    const sign = SIGNS[randomIndexOfSignsArray];
    const result = {
      question: `${num1} ${sign} ${num2} \n`,
      answer: `${calculate(num1, num2, sign)}`,
    }
    return result;
  },
};

export default game;

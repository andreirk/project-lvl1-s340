import readlineSync from 'readline-sync';

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
  askQuestion() {
    console.log(gameQuestion);
  },
  run(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const num1 = Math.ceil(Math.random() * 100);
      const num2 = Math.ceil(Math.random() * 100);
      const randomIndexOfSignsArray = randomIndexOfArray(SIGNS);
      const sign = SIGNS[randomIndexOfSignsArray];
      const userAnswer = readlineSync.question(`Question: ${num1} ${sign} ${num2} \n`);
      const correctAnswer = `${calculate(num1, num2, sign)}`;
      console.log(`You answer: ${userAnswer}`);
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        return false;
      }
    }
    return true;
  },
};


export default game;

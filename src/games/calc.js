import readlineSync from 'readline-sync';

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

const game = (numberOfMoves, userName) => {
  console.log('What is the result of the expression?.\n\n');
  const signs = ['+', '-', '*'];
  for (let i = 0; i < numberOfMoves; i += 1) {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    const sign = signs[i];
    const userAnswer = parseInt(readlineSync.question(`Question: ${num1} ${sign} ${num2} \n`), 10);
    const correctAnswer = calculate(num1, num2, sign);
    console.log(`You answer: ${userAnswer}`);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;

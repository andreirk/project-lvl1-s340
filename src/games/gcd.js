import readlineSync from 'readline-sync';

const gameQuestion = '\nWhat is the result of the expression?.\n\n';
const calculateGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return calculateGCD(b, a % b);
};


const game = {
  askQuestion() {
    console.log(gameQuestion);
  },
  run(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const num1 = Math.ceil(Math.random() * 100);
      const num2 = Math.ceil(Math.random() * 100);

      const userAnswer = parseInt(readlineSync.question(`Question: ${num1} ${num2} \n`), 10);
      const correctAnswer = calculateGCD(num1, num2);
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

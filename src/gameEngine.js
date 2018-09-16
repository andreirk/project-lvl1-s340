import readlineSync from 'readline-sync';
import askName from './index';

const putSpaces = (num) => {
  for (let i = 0; i < num; i += 1) {
    console.log('\n');
  }
};

export default (game, numberOfStepsInTheGame) => {
  console.log('Welcome to the Brain Games!');
  const mainGameTask = game.getMainTask();
  console.log(`${mainGameTask}`);
  putSpaces(2);
  const userName = askName();
  for (let i = 0; i < numberOfStepsInTheGame; i += 1) {
    const { question, answer } = game.play();
    const questionWithSpace = `${question} \n`;
    const userAnswer = readlineSync.question(questionWithSpace);
    console.log(`You answer: ${userAnswer}`);
    const isWin = answer === userAnswer;
    if (isWin) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

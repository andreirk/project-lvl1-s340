import readlineSync from 'readline-sync';
import askName from './index';

export default (game, numberOfStepsInTheGame) => {
  console.log('Welcome to the Brain Games!');
  const mainGameTask = game.getMainTask();
  console.log(`${mainGameTask}`);
  const userName = askName();
  for (let i = 0; i < numberOfStepsInTheGame; i += 1) {
    const { question, answer } = game.play();
    const userAnswer = readlineSync.question(question);
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

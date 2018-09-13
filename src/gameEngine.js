import askName from './index';


export default (game, numberOfStepsInTheGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  game.askQuestion();
  const isWin = game.run(numberOfStepsInTheGame);
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

import gameEngine from '../gameEngine';

const gameQuestion = 'What is the result of the expression?.';

const calculateGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return calculateGCD(b, a % b);
};


const game = {
  getMainTask() {
    return gameQuestion;
  },
  play() {
    const num1 = Math.ceil(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);
    const question = `${num1} ${num2}`;
    const answer = `${calculateGCD(num1, num2)}`;
    return {
      question,
      answer,
    };
  },
};

const numberOfStepsInTheGame = 3;

export default () => {
  gameEngine(game, numberOfStepsInTheGame);
};

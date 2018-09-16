import gameEngine from '../gameEngine';


const gameQuestion = 'What number is missing in this progression?';


function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}


const makeProgressionArr = (begin, step, num) => {
  const resultArr = [];

  for (let i = begin; resultArr.length < num; i += step) {
    const elem = i;
    resultArr.push(elem);
  }
  return resultArr;
};

const game = {
  getMainTask() {
    return gameQuestion;
  },
  play() {
    const beginProg = getRandomInt(0, 10);
    const numOfElemInProsion = 10;
    const stepOfProgression = getRandomInt(1, 4);
    const progressionArr = makeProgressionArr(beginProg, stepOfProgression, numOfElemInProsion);
    const indexOfMissing = getRandomInt(beginProg, numOfElemInProsion);
    const answer = `${progressionArr[indexOfMissing]}`;
    progressionArr[indexOfMissing] = '..';
    const question = progressionArr.join(', ');
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

import gameRunner from '../gameRunner';

const gameQuestion = 'Is this prime number?';

export const isPrime = (num, result = 0, step = 1) => {
  if (result > 2) {
    return false;
  }
  if (result < 2 && step >= num) {
    return true;
  }
  return isPrime(num, num % step === 0 ? result + 1 : result, step + 1);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const game = {
  getMainTask() {
    return gameQuestion;
  },
  play() {
    const question = getRandomInt(1, 15);
    const answer = `${isPrime(question) ? 'yes' : 'no'}`;
    const result = {
      question,
      answer,
    };
    return result;
  },
};


export default () => {
  gameRunner(game);
};

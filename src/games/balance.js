import gameRunner from '../gameRunner';

const gameQuestion = 'Balance the given number.';
const isBalancedArr = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return (min + 1) === max || min === max;
};

const balance = (num) => {
  const arr = (`${num}`).split('').map(el => parseInt(el, 10));
  while (!isBalancedArr(arr)) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    const indexOfMin = arr.indexOf(min);
    const indexOfMax = arr.indexOf(max);
    max -= 1;
    min += 1;
    arr.splice(indexOfMin, 1, min);
    arr.splice(indexOfMax, 1, max);
  }
  return arr.sort().join('');
};

const game = {
  getMainTask() {
    return gameQuestion;
  },
  play() {
    const num = Math.ceil(Math.random() * 9999);
    const question = `${num}`;
    const answer = `${balance(num)}`;
    return {
      question,
      answer,
    };
  },
};


export default () => {
  gameRunner(game);
};

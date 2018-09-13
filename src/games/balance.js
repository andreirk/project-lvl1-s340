import readlineSync from 'readline-sync';

const gameQuestion = 'Balance the given number. \n\n';
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
  askQuestion() {
    console.log(gameQuestion);
  },
  run(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const num = Math.ceil(Math.random() * 9999);
      const answer = readlineSync.question(`Question: ${num} \n`);
      const correctAnswer = balance(num);
      console.log(`You answer: ${answer}`);
      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        return false;
      }
    }
    return true;
  },
};

export default game;

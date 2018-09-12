import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const game = (numberOfMoves, userName) => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  for (let i = 0; i < numberOfMoves; i += 1) {
    const num = Math.ceil(Math.random() * 20);
    const answer = readlineSync.question(`Question: ${num} \n`);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    console.log(`You answer: ${answer}`);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;

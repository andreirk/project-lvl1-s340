import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const gameQuestion = 'Answer "yes" if number even otherwise answer "no". \n\n';


const game = {
  askQuestion() {
    console.log(gameQuestion);
  },
  run(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const question = Math.ceil(Math.random() * 20);
      const answer = readlineSync.question(`Question: ${question} \n`);
      const correctAnswer = isEven(question) ? 'yes' : 'no';
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

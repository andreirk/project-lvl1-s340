import gameRunner from '../gameRunner';

const isEven = num => num % 2 === 0;
const gameQuestion = 'Answer "yes" if number even otherwise answer "no". \n\n';

const game = {
  getMainTask() {
    return gameQuestion;
  },
  play() {
    const question = Math.ceil(Math.random() * 20);
    const answer = isEven(question) ? 'yes' : 'no';
    return {
      question,
      answer,
    };
  },
};


export default () => {
  gameRunner(game);
};

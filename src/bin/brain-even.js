#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from '..';

console.log('Welcome to the Brain Games!');

console.log('Answer "yes" if number even otherwise answer "no".');

const NUMBER_OF_MOVES = 3;
const isEven = num => num % 2 === 0;

const generateNumbersArr = (num) => {
  const arr = [];
  for (let i = 0; i < num; i += 1) {
    const newNum = Math.ceil(Math.random() * 20);
    arr.push(newNum);
  }
  return arr;
};

const game = (numberOfTries) => {
  const userName = greet();
  const numsArr = generateNumbersArr(numberOfTries);
  for (let i = 0; i < numsArr.length; i += 1) {
    const num = numsArr[i];
    const answer = readlineSync.question(`Question: ${num} \n`);
    const opositeAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`You answer: ${answer}`);
    if (isEven(num) && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven(num) && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${opositeAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

game(NUMBER_OF_MOVES);

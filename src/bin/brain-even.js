#!/usr/bin/env node
import game from '../games/even';
import greetAndGetUserName from '..';

const userName = greetAndGetUserName();
console.log('Welcome to the Brain Games!');

const numberOfStepsInTheGame = 3;

game(numberOfStepsInTheGame, userName);

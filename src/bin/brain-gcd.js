#!/usr/bin/env node
import game from '../games/gcd';

import gameEngine from '../gameEngine';

const numberOfStepsInTheGame = 3;

gameEngine(game, numberOfStepsInTheGame);

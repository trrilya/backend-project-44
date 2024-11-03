#!/usr/bin/env node
import runGame from '../src/logic.js';
import calcGame from '../games/calc.js';
import evenGame from '../games/even.js';
import gcdGame from '../games/gcd.js';

let game;
if (process.argv[2] === 'even') {
  game = evenGame;
} else if (process.argv[2] === 'calc') {
  game = calcGame;
} else {
  game = gcdGame;
}

runGame(game);
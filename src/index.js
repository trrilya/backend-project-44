#!/usr/bin/env node
import runGame from '../src/logic.js';
import calcGame from '../games/calc.js';
import evenGame from '../games/even.js';
import gcdGame from '../games/gcd.js';
import progressionGame from '../games/progression.js';

switch (process.argv[2]) {
  case 'even':
    runGame(evenGame);
    break;
  case 'calc':
    runGame(calcGame);
    break;
  case 'gcd':
    runGame(gcdGame);
    break;
  case 'progression':
    runGame(progressionGame);
    break;
  default:
    console.log("Unknown game");
    process.exit(1);
}
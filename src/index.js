#!/usr/bin/env node
import runGame from '../stc/logic.js';
import calcGame from '../games/calc.js';
import evenGame from '../games/even.js';

const game = process.argv[2] === 'even' ? evenGame : calcGame;

runGame(game);
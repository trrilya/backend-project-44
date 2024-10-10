#!/usr/bin/env node

import { welcome, gameLoop } from '../stc/even.js';

const userName = welcome();
gameLoop(userName);
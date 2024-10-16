#!/usr/bin/env node

import { welcome, gameCalc } from '../stc/logic2.js';

const userName = welcome();
gameCalc(userName);
/* eslint-disable no-console */
import http from 'http';
import reload from 'reload';
import chalk from 'chalk';
import terminalLink from 'terminal-link';

import app from './config/server.js';
import figures from './constants/index.js';

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log(figures[Math.floor(Math.random() * figures.length)]);
  console.log('');
  console.log('');
  console.log('');
  console.log(chalk.yellow('|============================================|'));
  console.log(chalk.yellow('|                                            |'));
  console.log(terminalLink('| Running on: ', `http://localhost:${app.get('port')}`));
  console.log(chalk.yellow('|                                            |'));
  console.log(chalk.yellow('|============================================|'));
});

reload(app);

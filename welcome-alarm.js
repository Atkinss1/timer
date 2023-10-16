const chalk = require('chalk');
// prints welcome message for timer2
const welcomeFunc = () => {
  process.stdout.write(`\n\n\t\t\t 🕐🕐 ${chalk.underline.bold.green('Welcome to the interactive alarm clock!')}🕐🕐
  \t\t  press 'b' to set the alarm off, or choose 1 - 9 to set a timer
\n\t\t\t\t        ${chalk.yellow('CTRL + C to exit\n\n')}`);
};

module.exports = welcomeFunc;
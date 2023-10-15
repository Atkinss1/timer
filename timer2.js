// importing readline to use an interface for reading data one line at a time
const stdin = process.stdin;
const welcomeFunc = require('./welcome-alarm');
const goodbye = require('./goodbyeFunc');
const countDown = require('./countDown');
const chalk = require('chalk');
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// display welcome line
welcomeFunc();
// listening to user input using stdin 'on'
stdin.on('data', (key) => {
  // edgecase: forcing lowercase incase caplocks is on
  if (key.toLowerCase() === 'b') {
    // printing message to console for each key stroke
    process.stdout.write('\t\t\t\t\t      🕐\n');
    process.stdout.write('\x07');
  }
  // key === to CTRL + C encoding
  if (key === '\u0003') {
    goodbye();
    process.exit();
  }
  // keystroke is between 1 and 9
  if (key >= 1 && key <= 9) {
    const setTime = key;

    // converting time to milliseconds
    const timeInSeconds = setTime * 1000;
    process.stdout.write(`\n\n\t\t\t\t   Timer is set for ${chalk.yellowBright(setTime)} seconds..\n
    \t\t\t    ${chalk.bold.cyan('  -------------------------------------')}`);

    // countdown display
    countDown(setTime);


    //! ALARM
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`\n\n\t\t\t\t\t  ${chalk.bgRedBright('TIME IS UP!')}\n\n
      \n\n`);
      goodbye();
    }, timeInSeconds);
      
    console.log('\n\n\n');
  }
    
      
    

  
});

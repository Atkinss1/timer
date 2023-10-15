// importing readline to use an interface for reading data one line at a time
const readline = require('readline');
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// creating an interface that connects stdin
const rl = readline.createInterface({
  input: process.stdin,
});

// tell user clock will beep or output '.' if they press "b" or choose number 1 to 9;
console.log(`\n\n\n\t\t\tWelcome to the interactive alarm clock!
\t    press 'b' to set the alarm off, or choose 1 - 9 to set a timer
\t\t\t\tuse CTRL + C to exit\n\n`);
// listening to user input using 'on'
stdin.on('data', (key) => {
  // edgecase: forcing lowercase incase caplocks is on
  if (key.toLowerCase() === 'b') {
    // printing message to console for each key stroke
    process.stdout.write('\t\t\t\t\t.\n');
  }
  // key === to CTRL + C encoding
  if (key === '\u0003') {
    console.log('\n\n\t\t\t    Thanks for using me, ciao!\n\n');
    process.exit();
  }
  // keystroke is between 1 and 9
  if (key >= 1 && key <= 9) {
    const setTime = key;

    // converting time to milliseconds
    const timeInSeconds = setTime * 1000;
    process.stdout.write(`\n\n\t\t\t    Timer is set for ${setTime} seconds..`, stdin.setRawMode(false));

    //! ALARM
    setTimeout(() => {
      process.stdout.write(`\n\n\t\t\t\t    TIME IS UP!\n\n
      \n\n\t\t\t    Thanks for using me, ciao!\n\n`);
    }, timeInSeconds, stdin.setRawMode(true));
      
    console.log('\n\n\n');
  }
    
      
    

  
});

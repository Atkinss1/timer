const welcomeFunc = () => {
  process.stdout.write(`\n\n\t\t\t   Welcome to the interactive alarm clock!
  \t\tpress 'b' to set the alarm off, or choose 1 - 9 to set a timer
\n\t\t\t\t   use CTRL + C to exit\n\n`);
};

welcomeFunc();
module.exports = welcomeFunc;
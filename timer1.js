// function takes in integers as CL arguments and initiates a timer
// timer will print a '.' when it has ended

// take in CL argument array (setTimer)

let setTimer = process.argv.slice(2);

// loop through each element in array

for (let time of setTimer) {
  // edgecase if time is not a number
  if (isNaN(time) || -time || time === ' ') {
    process.stdout.write("Sorry, your input wasn't a number\n");
    break;
  }

  // convert time to milliseconds
  time = time * 1000;
  // set timeout function to print '.' when timer is up
  setTimeout(() => {
    process.stdout.write('.\n');
  }, time);
}
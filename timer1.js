// take in CL argument array (setTimer)

let setTimer = process.argv.slice(2);

// loop through each element in array

for (let time of setTimer) {
  time = time * 1000;
  setTimeout(() => {
    process.stdout.write('.');
  }, time);
}
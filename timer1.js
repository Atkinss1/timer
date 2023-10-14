// take in CL argument array (setTimer)

let setTimer = process.argv.slice(2);

// loop through each element in array

for (let time of setTimer) {
  console.log(time);
}
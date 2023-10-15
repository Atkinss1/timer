// countdown display

const countDown = (time) => {

  let timer = time;
  setInterval(() => {
    console.log(`\t\t\t\t\t 🕐🕐  ${timer - 1}  🕐🕐\n`);
    timer--;
  }, 1000);
};
module.exports = countDown;
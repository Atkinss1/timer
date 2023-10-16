const countDown = require('./countDown');
const goodbyeFunc = require('./goodbyeFunc');
const welcomeFunc = require('./welcome-alarm');

const timerFunc = {
  countDown,
  goodbyeFunc,
  welcomeFunc
};

module.exports = timerFunc;
var { doubleUp } = require('./foobar');

module.exports = function({percent = 100, amount}) {
  const percentOff = (percent / 100) * amount;

    console.log(doubleUp);

  return percentOff * doubleUp(10);
}
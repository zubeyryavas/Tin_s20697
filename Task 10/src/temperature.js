/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */

module.exports = function () {
  const temp = parseInt(document.getElementById('temp').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  console.log(temp);
  console.log(from);
  console.log(to);
  if (from === 'celsius') {
    switch (to) {
      case 'fahrenheit' :
        return (9 / 5 * (temp) + 32);
      case 'kelvin':
        return (temp + 273);
      default:
        return temp; 
    }
  } else if (from === 'fahrenheit') {
    switch (to) {
      case 'celsius' :
        return (5 / 9 * (temp - 32));
      case 'kelvin':
        return (5 / 9 * (temp - 32) + 273);
      default:
        return temp; 
    }
  } else if (from === 'kelvin') {
    switch (to) {
      case 'celsius' :
        return (temp - 273);
      case 'fahrenheit':
        return (9 / 5 * (temp - 273) + 32);
      default:
        return temp; 
    }
  }
}



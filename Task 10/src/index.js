const temp = require('./temperature.js');
const dist = require('./distance.js');
// import temp from './temperature';

document.getElementById('btn1').addEventListener('click', function () {
  document.getElementById('result1').innerHTML = "Result : " + temp();
});
document.getElementById('btn2').addEventListener('click', function () {
  document.getElementById('result2').innerHTML = "Result : " + dist();
});

//console.log(require('../people.js'))

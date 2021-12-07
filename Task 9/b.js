/* eslint-disable semi */
/* eslint-disable no-undef */
calculate = function (value) {
  const num1 = document.getElementById('number1').value;
  const num2 = document.getElementById('number2').value;
  const oper = value;
  const xhttp = new XMLHttpRequest();

  xhttp.open('POST', 'http://localhost:8000/form', true);
  xhttp.setRequestHeader('Content-type', 'application/json');

  xhttp.onload = function () {
    document.getElementById('result').value = JSON.parse(xhttp.response).result;
  };
  xhttp.send(JSON.stringify({ x: num1, y: num2, code: oper }));
}

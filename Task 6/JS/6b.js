
setTimeout(appendEl, 5000);

function appendEl(){
var el = document.createElement("p");
var text = document.createTextNode("Element");
el.appendChild(text);
var body = document.querySelector("body");
body.appendChild(el);
}
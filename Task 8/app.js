/* eslint-disable indent */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */

const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser');


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//a
app.get('/hello', (req, res) => res.send("hello world!"));
//b
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});
//c
app.post('/formdata', (req, res) => {
  console.log(req.body);
  res.render('formdata', req.body);
});

//d
app.use(bodyParser.json());

//tested using Postman
app.post('/jsondata', (req, res) => {
    console.log(req.body);
    res.render('formdata', req.body);
});
/*
{    "fname": "Zubeyr",
     "lname": "Yavas",
     "age": 24
}
*/

app.listen(8000, () => console.log("Server is running "));



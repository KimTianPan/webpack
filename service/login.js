const express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const connection = require('./MySQL');
console.log("connection", connection)
const app = express();
// console.log("app", app.post('/api/post',{},()=>{}))
app.post('/login', jsonParser, (req, res) => {
   const data = req.body;
});

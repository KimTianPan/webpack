const express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
require('./login');
const app = express();
const port = 3000;

// app.get('/api/get', (req, res) => res.send('Hello World!'));

app.listen(port, () => {});
// app.post('/api/post', jsonParser, (req, res) => {
//   const data = req.body;
//   res.send('请求成功');
// });
// module.exports = { app: app, jsonParser: jsonParser };

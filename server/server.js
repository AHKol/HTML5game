var express = require('express');
var app = express();
var sever = app.listen(3000)

app.use(express.static('public'));

console.log("Server Start")
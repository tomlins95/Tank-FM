var express = require('express');

var app = express();

app.use(express.static(__dirname+'/html'));

app.listen(process.env.PORT);

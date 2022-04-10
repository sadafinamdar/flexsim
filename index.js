var express = require('express');
const routes = require('./routes/api');

var app = express();
const port = 3000;

app.listen(process.env.PORT || 3000,function(){
    console.log('Listening @ 3000');
})

app.use(express.static('public'));

app.use(routes);

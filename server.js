var express = require('express');

var app = express();

// head of all views
app.set('views', __dirname);
// use jade as view engine
app.set('view engine', 'jade');

// declare whre static content will be taken from 
app.use(express.static(__dirname + '/public')); // bower_components'));


app.get('*', function(req, res){
    res.render('index');
});

// listen on ports provided by c9
app.listen(process.env.PORT, process.env.IP);


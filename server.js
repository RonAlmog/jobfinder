var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job');


var app = express();

// head of all views
app.set('views', __dirname);
// use jade as view engine
app.set('view engine', 'jade');

// declare whre static content will be taken from 
app.use(express.static(__dirname + '/public')); // bower_components'));

app.get('/api/jobs', function(req, res){
   mongoose.model('Job').find({}).exec(function(error, collection){
       res.send(collection);
   });
});

app.get('*', function(req, res){
    res.render('index');
});

// connect to mongodb.  mongodb://localhost is the default constring.
// jobfinder is the db. if it can't be found, it will be created.
//mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://jobfinder99user:goodforme@ds029051.mongolab.com:29051/jobfinder99');

// make sure we are connected.
var con = mongoose.connection;
con.once('open', function(){
   console.log('connected to mongodb successfully!');
   jobModel.seedJobs();
});

// listen on ports provided by c9
app.listen(process.env.PORT, process.env.IP);


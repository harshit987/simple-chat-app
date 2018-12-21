//importing express to design our web application
var express= require('express');
var app= express();
var path = require('path');

//use body-parser
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


//making database connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://harshit987:h8a1r18s19@ds139934.mlab.com:39934/mydb';
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var auth = require('./routes/chat.route.auth.js');
app.use('/',auth);

var account = require('./routes/chat.route.account.js');
app.use('/',account);

//app.get is used to call a function when this route is called
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');


app.get('/',function(req,res){
    res.render('index.ejs');
});

//instruct the server to listen at port 3000
app.listen(3000);


// importing express to design our web application
var express = require('express')
var app = express()
var path = require('path')
var server = require('http').Server(app)
var session = require('express-session')
var io = require('socket.io')(server)

// use express-session
app.set('trust proxy', 1)
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)

// use body-parser
var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// making database connection
var mongoose = require('mongoose')
var mongoDB = 'mongodb://harshit987:h8a1r18s19@ds139934.mlab.com:39934/mydb'
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
)
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

var auth = require('./routes/chat.route.auth.js')
app.use('/', auth)

var account = require('./routes/chat.route.account.js')
app.use('/', account)

// app.get is used to call a function when this route is called
app.set('views', path.join(__dirname, '../client/views'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index.ejs')
})

io.on('connection', socket => {
  
  console.log('new user connected')
  socket.on('new user',function(data){
    io.sockets.emit("user",{user : data});
  });
  
  socket.on("send_message", function (data) {
      io.sockets.emit("show_message",{my : data})
  })
  socket.on('disconnect', function (socket) {
    console.log('a user disconnected')
  })
})
// instruct the server to listen at port 3000
server.listen(3000)

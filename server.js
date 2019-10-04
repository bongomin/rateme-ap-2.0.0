var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var mongoose = require ('mongoose');
var mongoStore= require('connect-mongo')(session);

// importing database config file

var database = require('./config/database.js');


var app = express();

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(database.mongoURI , {
   useNewUrlParser:true,
   useUnifiedTopology: true
})
.then(() => {
   console.log('Mongodb Successfully Connected')
})
.catch(err => {
   console.log(err);
} )

app.use(express.static('public'));
app.engine('ejs', engine);
app.set('view engine' , 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extende : true}));
app.use(bodyParser.json());


app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: false,
   store: new mongoStore({ mongooseConnection :mongoose.connection })
 }))

 require('./routes/user')(app)

// route to the homepage 
app.get('/' , (req,res ,next) => {
   res.render('index');

})

// route for signup
app.get('/signup' ,(req,res,next) => {
   res.json({'signup_page' :'signup here'})
}) 






var PORT = 3000

app.listen(PORT,() => {
   console.log('server is running on port:'+PORT);
})
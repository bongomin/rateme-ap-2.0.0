var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');



var app = express();

app.use(express.static('public'));
app.engine('ejs', engine);
app.set('view engine' , 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extende : true}));
app.use(bodyParser.json());


app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true }
 }))


app.get('/' , (req,res ,next) => {
   res.render('index');

})






var PORT = 3000

app.listen(PORT,() => {
   console.log('server is running on port:'+PORT);
})
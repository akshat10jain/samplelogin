var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var configDB = require('./config/database.js');
//connection to database
mongoose.connect(configDB.url, { 
    useMongoClient: true 
});


require('./config/passport')(passport); 

// set up our express application
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'hkjshkbxuiwyiuexyiuwoiuxuiwwnyoiywoi', 
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());

// routes
require('./app/routes.js')(app, passport); 
app.listen(port);
console.log('The magic happens on port ' + port);
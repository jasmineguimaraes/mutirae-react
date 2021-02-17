var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');  // ADICIONADO --------------------------
const session = require('express-session');  // ADICIONADO --------------------------
require('./auth')(passport);  // ADICIONADO --------------------------
const bodyParser = require("body-parser");     //Para conexão com React
const cors = require("cors");     //Para conexão com React

// FUNÇÃO PARA ROTAS PRIVADAS --------------------------
function authenticationMiddleware(req, res, next) {   // Faz com que a rota seja privada  
  if (req.isAuthenticated()) return next();
  res.redirect('/login?fail=true');
}
// --------------------------

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');  // ADICIONADO --------------------------
const mutiroesRouter = require('./routes/mutiroes')

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:3000",    // LOCAL ONDE O REACT ESTÁ CONECTADO
    credentials: true
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CONEXÃO BANCO DE DADOS E SESSÃO --------------------------
const MySQLStore = require('express-mysql-session')(session);
require('./auth')(passport);
app.use(session({  // POR PADRÃO É ARMAZENADA EM MEMÓRIA
  store: new MySQLStore({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
  }),
  secret: '123',//configure um segredo seu aqui,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 5 * 60 * 1000 }//5min
}))
app.use(passport.initialize());
app.use(passport.session());
// --------------------------

app.use('/login', loginRouter);  // ADICIONADO -----------------------------------------
app.use('/mutiroes', mutiroesRouter)
app.use('/users',authenticationMiddleware, usersRouter);  // Rota privada  
app.use('/',authenticationMiddleware, indexRouter);  // Rota privada     Mais genérica em baixo


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

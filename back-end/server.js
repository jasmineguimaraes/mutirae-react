const mongoose = require("mongoose");     //Banco de dados Mongo DB
const cors = require("cors");     //Para conexão com React
const passportLocal = require("passport-local").Strategy;     //Em auth.js 
const bcrypt = require("bcryptjs");     //Em auth.js
const bodyParser = require("body-parser");     //Para conexão com React
var express = require('express');
var cookieParser = require('cookie-parser');
const passport = require('passport');  // ADICIONADO --------------------------
const session = require('express-session');  // ADICIONADO --------------------------
var app = express();


// Banco de dados--------------------------
const User = require('./user');
mongoose.connect('mongodb://localhost:27017/login', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => {
    console.log("Mongoose Conectado!")
}
);



// Middleware React--------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:3000",    // LOCAL ONDE O REACT ESTÁ CONECTADO
    credentials: true
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"));    /* Incluído "secretcode" para React */
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);



// Routes--------------------------
app.post("/login", (req,res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.user);
          });
        }
      })(req, res, next);
    });

app.post("/register", (req,res) => {
    User.findOne({username: req.body.username}, async (err,doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password,10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created")
        }
    })
});
app.get("/user", (req,res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
})



app.listen(4000, ()=>{
    console.log('Servidor na porta 4000')
})


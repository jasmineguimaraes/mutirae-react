const express = require('express');
const router = express.Router();
const passport = require('passport');
 
/* GET login page. */
router.get('/', (req, res, next) => {
    if (req.query.fail)
        res.render('login', { message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login', { message: null });
});

/*
router.post('/', passport.authenticate('local'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.user);
  })
*/


/* POST login page */
router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json({ success: false, message: info.message }); }
      req.logIn(user, function(err) {
        if (err) { return res.json({ success: false, message: loginErr }); }
        return res.json({ success: true, message: "authentication succeeded" });
      });
    })(req, res, next);
  });


/* app.post("/login", (req,res, next) => {
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
}) */

 
module.exports = router;

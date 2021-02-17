var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	const db = require("../db");
	//res.render('posts.ejs', {dados:result})
    db.query('SELECT * FROM usuarios', (error, result)=>{
		res.json({dados: result})
	})
})

module.exports = router;

const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	const db = require("../db");
	//res.render('posts.ejs', {dados:result})
    db.query('SELECT * FROM mutiroes', (error, result)=>{
        res.json({dados:result})
    })
});

module.exports = router;
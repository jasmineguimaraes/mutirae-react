const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	const mysql = require("mysql");
	const conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "recode",
		database: "passport",
	});
	//res.render('posts.ejs', {dados:result})
	conn.query("SELECT * FROM mutiroes", (error, result) => {
		return res
			.status(200)
			.json({ query: JSON.parse(JSON.stringify(result)) });
	});
});

router.post("/salvar", (req, res, next) => {
	const mysql = require("mysql");
	var cadastro = req.body[0];
	const conn = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "recode",
		database: "passport",
	});
	conn.query("INSERT INTO mutiroes SET?", cadastro, (error, result) => {
		return res.json({ message: "Dados enviados com Sucesso!" });
	});
});

module.exports = router;

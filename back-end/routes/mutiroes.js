const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	const mysql = require("mysql");
    const conn = mysql.createConnection({
        host:process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    })
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
        host:process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    })
	conn.query("INSERT INTO mutiroes SET?", cadastro, (error, result) => {
		return res.json({ message: "Dados enviados com Sucesso!" });
	});
});

router.delete("/excluir", (req, res, next)=>{
	const mysql = require("mysql");
    const conn = mysql.createConnection({
        host:process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    })

    // {} desestrutura
    // .body: body-parser
    const {user} = req.body[0]
    const {titulo} = req.body[0]
  
    conn.query(`DELETE FROM mutiroes WHERE user= ? AND titulo= ?`,[user, titulo], (error, result)=>{
        console.log("erro: " + error)
        console.log("result: " + result)
        return res.json({message:"Excluído com Sucesso!"})
    })
});

module.exports = router;

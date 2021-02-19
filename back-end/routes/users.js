var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const mysql =  require("mysql")
    const conn = mysql.createConnection({
        host:process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    })
	//res.render('posts.ejs', {dados:result})
    conn.query('SELECT * FROM usuarios', (error, result)=>{
		res.json({dados: result})
	})
})

router.post("/cadastrar", (req, res, next)=>{
	const mysql =  require("mysql")
    const conn = mysql.createConnection({
        host:process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    })

    // {} desestrutura
    // .body: body-parser
	console.log(req.body)
    const {nome_completo} = req.body[0]
    const {nome_usuario} = req.body[0]
    var {senha_usuario} = req.body[0]
    const {cep} = req.body[0]
    const {numero_usuario} = req.body[0]
    const {cidade_usuario} = req.body[0]
    const {endereco_usuario} = req.body[0]
    const {complemento_usuario} = req.body[0]
    
    var salt = bcrypt.genSaltSync(10);
    senha_usuario = bcrypt.hashSync(senha_usuario, salt);

    // array com meus dados
    let dados = []
    dados.push({
        nome: nome_completo,
        username: nome_usuario,
        password: senha_usuario,
        cep: cep,
        numero_usuario: numero_usuario,
        cidade_usuario: cidade_usuario,
        endereco_usuario: endereco_usuario,
        complemento_usuario: complemento_usuario,
    });
	//console.log(dados)
    // '?' recebe o que for inserido em 'dados'
    // arrow function de call back (quando finalizar a inserção de dados)
    conn.query('INSERT INTO usuarios SET?',dados,(error,result)=>{
        dados=[] // "esvazia" o array
        return res.json({message:"Dados enviados com Sucesso!"})
    })
});

router.put("/atualizar", (req, res, next)=>{
	const mysql =  require("mysql")
    const conn = mysql.createConnection({
        host:process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    })
    // {} desestrutura
    // .body: body-parser
    const {username} = req.body[0]
    const {nome_completo} = req.body[0]
    const {senha_usuario} = req.body[0]
    const {cep} = req.body[0]
    const {numero_usuario} = req.body[0]
    const {cidade_usuario} = req.body[0]
    const {endereco_usuario} = req.body[0]
    const {complemento_usuario} = req.body[0]
  
    // array com meus dados
    let dados = []
    dados.push({
        nome: nome_completo,
        password: senha_usuario,
        cep: cep,
        numero_usuario: numero_usuario,
        cidade_usuario: cidade_usuario,
        endereco_usuario: endereco_usuario,
        complemento_usuario: complemento_usuario,
    });

    // '?' recebe o que for inserido em 'dados'
    // arrow function de call back (quando finalizar a inserção de dados)
    conn.query(`UPDATE usuarios SET ? WHERE username= ?`,[dados, username],()=>{
        dados=[] // "esvazia" o array
        return res.json({message:"Dados atualizados com Sucesso!"})
    })
});

router.delete("/excluir", (req, res, next)=>{
	const mysql =  require("mysql")
    const conn = mysql.createConnection({
        host:process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    })

    // {} desestrutura
    // .body: body-parser
    const {nome_usuario} = req.body[0]
    const {senha_usuario} = req.body[0]
  
    conn.query(`DELETE FROM usuarios WHERE nome_usuario=${nome_usuario} AND senha_usuario=${senha_usuario}`, (error, result)=>{
        res.json({message:"Cadastro excluído com Sucesso!"})
    })
});

module.exports = router;

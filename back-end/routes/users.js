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

router.post("/cadastrar", (req, res, next)=>{
	const db = require("../db");
	const conn = db.connect();

    // {} desestrutura
    // .body: body-parser
	console.log(req.body)
    const {nome_usuario} = req.body
    const {senha_usuario} = req.body
    const {cep} = req.body
    const {numero_usuario} = req.body
    const {cidade_usuario} = req.body
    const {endereco_usuario} = req.body
    const {complemento_usuario} = req.body
  
    // array com meus dados
    let dados = []
    dados.push({
        nome_usuario: nome_usuario,
        senha_usuario: senha_usuario,
        cep: cep,
        numero_usuario: numero_usuario,
        cidade_usuario: cidade_usuario,
        endereco_usuario: endereco_usuario,
        complemento_usuario: complemento_usuario,
    });
	//console.log(dados)
    // '?' recebe o que for inserido em 'dados'
    // arrow function de call back (quando finalizar a inserção de dados)
    conn.query('INSERT INTO usuarios SET?',dados,()=>{
        dados=[] // "esvazia" o array
        return res.json({message:"Dados enviados com Sucesso!"})
    })
});

router.put("/atualizar", (req, res, next)=>{
	const db = require("../db");
	const conn = db.connect();
    // {} desestrutura
    // .body: body-parser
    const {nome_usuario} = req.body
    const {senha_usuario} = req.body
    const {cep} = req.body
    const {numero_usuario} = req.body
    const {cidade_usuario} = req.body
    const {endereco_usuario} = req.body
    const {complemento_usuario} = req.body
  
    // array com meus dados
    let dados = []
    dados.push({
        nome_usuario: nome_usuario,
        senha_usuario: senha_usuario,
        cep: cep,
        numero_usuario: numero_usuario,
        cidade_usuario: cidade_usuario,
        endereco_usuario: endereco_usuario,
        complemento_usuario: complemento_usuario,
    });

    // '?' recebe o que for inserido em 'dados'
    // arrow function de call back (quando finalizar a inserção de dados)
    conn.query(`UPDATE usuarios SET ? WHERE nome_usuario=${nome_usuario}`,dados,()=>{
        dados=[] // "esvazia" o array
        return res.json({message:"Dados atualizados com Sucesso!"})
    })
});

router.delete("/excluir", (req, res, next)=>{
	const db = require("../db");
	const conn = db.connect();

    // {} desestrutura
    // .body: body-parser
    const {nome_usuario} = req.body
    const {senha_usuario} = req.body
  
    conn.query(`DELETE FROM usuarios WHERE nome_usuario=${nome_usuario} AND senha_usuario=${senha_usuario}`, (error, result)=>{
        res.json({message:"Cadastro excluído com Sucesso!"})
    })
});

module.exports = router;

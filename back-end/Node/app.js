const express = require('express')

const app = express();
const cors = require('cors')

app.set('view engine', 'ejs')

app.use(cors())

app.get("/usuarios", (req, res, next)=>{
    const mysql =  require("mysql")
    const connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '',
        database:'recodeprojeto'
    })

        //res.render('posts.ejs', {dados:result})
        connection.query('SELECT * FROM usuarios', (error, result)=>{
            res.json({dados: result})
        })
});

app.get('/mutiroes', (req, res, next)=>{
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database:'recodeprojeto'
    })
    connection.query('SELECT * FROM mutiroes', (error, result)=>{
        res.json({dados:result})
    })
})

app.listen(1910, ()=>{
    console.log('O servidor subiu na porta 1910')
})

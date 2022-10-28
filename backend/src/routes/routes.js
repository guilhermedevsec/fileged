//Rotas
const express = require('express')
const interfaceDocumentos = require('../interfaces/documentos')
const interfaceUsuarios = require('../interfaces/usuarios')
const app = express()
const midleware = require('../middleware/login')

//Autenticação
app.post('/login', async (req, res) => {
    res.status(200)
    retorno = await interfaceUsuarios.verificarUsuario(req.body)
    if(retorno == null){
        res.json({message : "Falha na Autenticação"})
                      
    }else{
        res.json({message : "Autenticado"})
           .redirect('/home')

    }
    
})

//Home
app.get('/home', async (req, res) =>{
    res.status(200)
       .send("HomePage")
    
})

app.get('/retornoDados', async (req, res) => {
    res.status(200)
    retorno = await interfaceDocumentos.recuperarDados()
    res.json(retorno)
})

//POST - Usuario
app.post('/cadastrarUsuario', async (req, res) => {
    res.status(200)
    retorno = await interfaceUsuarios.cadastrarUsuario(req.body)
    res.json(retorno)
})

//POST - Documento
app.post('/inserirDocumentos', async (req, res) => {
    res
        .status(200)
        .json({
            "message": "inserido com sucesso"
        })
    await interfaceDocumentos.inseriDados(req.body)
})

module.exports = app


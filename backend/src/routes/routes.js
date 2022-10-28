//Rotas
const express = require('express')
const interfaceDocumentos = require('../interfaces/documentos')
const interfaceUsuarios = require('../interfaces/usuarios')
const app = express()
const midleware = require('../middleware/jwt')
const jwt = require('jsonwebtoken')

app.get('/', async (req, res) => {
    res.redirect('/login')
})

//Autenticação
app.post('/login', async (req, res, next) => {
    res.status(200)
    retorno = await interfaceUsuarios.verificarUsuario(req.body)
    try{

    
    if (retorno == null) {
        res.json({ message: "Falha na Autenticação" })

    } else {
        let id = retorno.id
        console.log(id)
        const token = jwt.sign({ id }, process.env.AUTH, {
            expiresIn: 300
        })
        return res.json({ auth: true, token: token })

    }

    res.status(500).json({ message: "Login invalido" })
}catch(erro){
    console.log(erro)
}
next();
})

//Logout
app.post('/logout', (req, res) => {
    res.json({ auth: false, token: null })
})


//Home
app.get('/home', midleware.verifyJWT, async (req, res) => {
    res.status(200)
        .send("HomePage")

})

app.get('/retornoDados', midleware.verifyJWT, async (req, res) => {
    res.status(200)
    retorno = await interfaceDocumentos.recuperarDados()
    res.json(retorno)
})

//POST - Usuario
app.post('/cadastrarUsuario', midleware.verifyJWT, async (req, res) => {
    res.status(200)
    retorno = await interfaceUsuarios.cadastrarUsuario(req.body)
    res.json(retorno)
})

//POST - Documento
app.post('/inserirDocumentos', midleware.verifyJWT, async (req, res) => {
    res
        .status(200)
        .json({
            "message": "inserido com sucesso"
        })
    await interfaceDocumentos.inseriDados(req.body)
})

module.exports = app


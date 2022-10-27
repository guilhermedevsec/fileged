//Rotas
const express = require('express')
const interface = require('../interfaces/instancia')
const app = express()

app.get('/retornoDados', async (req, res) =>{
    res.status(200)
    retorno = await interface.recuperarDados()
    res.json(retorno)
})

app.post('/inserirDocumentos', async (req, res) =>{
    res
        .status(200)
        .json({
                "message" : "inserido com sucesso"
              })
        await interface.inseriDados(req.body)
})

module.exports=app


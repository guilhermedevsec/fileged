const express = require('express')
const app = express()
const routes = require('./src/routes/routes')
const db = require('./src/database/factoryConnection')
const bodyParser = require('body-parser')

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//rotas
app.use(routes)

//Configurar dotenv

require('dotenv').config()



app.listen(process.env.PORT, () =>{
    db.sequelize
    console.log("rodando")
})
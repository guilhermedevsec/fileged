const express = require('express')
const app = express()
const routes = require('./src/routes/routes')
const db = require('./src/database/factoryConnection')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')


//Auth
app.set('superSecret', 'minha palavra passe'); // criar uma palavra passe de controlo
app.use(cookieParser());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
 });
 


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
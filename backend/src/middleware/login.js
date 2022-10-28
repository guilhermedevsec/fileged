const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
    try{
        const decode = jwt.verify(req.body.token, process.env.AUTH)
        req.usuario = decode
    }catch(erro){
        return res.status(401).send({message : "Falha na autenticação"})
    }
}
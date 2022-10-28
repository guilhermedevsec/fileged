const { json } = require('body-parser')
const usuario = require('../models/usuarios')

const cadastrarUsuario = async (user) => {
    try {
        await usuario.create({
            usuario: user.usuario,
            email: user.email,
            tipo: user.tipo,
            senha: user.senha
        })
    } catch (erro) {
        console.log("erro ao cadastrar" + erro)
    }
}

const verificarUsuario = async (user) => {
    
    let valor = usuario.findOne({
        where: {
            usuario: user.usuario,
            senha: user.senha
        },
        raw : true

    })
    
    return valor
    
    
}

module.exports = {
    verificarUsuario: verificarUsuario,
    cadastrarUsuario: cadastrarUsuario
}
const db = require('../database/factoryConnection')

const Usuarios = db.sequelize.define('usuario', {
            usuario: {
                type: db.Sequelize.STRING,
                allowNull: false
            },
            email : {
                type: db.Sequelize.STRING,
                allowNull : false
            },
            tipo : {
                type: db.Sequelize.INTEGER,
                allowNull: false
            },
            senha: {
                type: db.Sequelize.STRING,
                allowNull: false
            }
        })

/*    Usuarios.sync({force : true})*/

module.exports = Usuarios
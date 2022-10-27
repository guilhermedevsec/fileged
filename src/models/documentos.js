const db = require('../database/factoryConnection')

const Document = db.sequelize.define('tipo', {
            tipo: {
                type: db.Sequelize.STRING,
                allowNull: false
            },

            documento:{
                type: db.Sequelize.BLOB,
                allowNull: false
            },

            descricao: {
                type: db.Sequelize.TEXT,
                allowNull: false
            }
        })

module.exports = Document

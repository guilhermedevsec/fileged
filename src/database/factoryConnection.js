require('dotenv').config()
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
        host: process.env.URL,
        dialect: process.env.TYPEDB
})
    
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }




  module.exports = {
    sequelize : sequelize,
    Sequelize : Sequelize
  }


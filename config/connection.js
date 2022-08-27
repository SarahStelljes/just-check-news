// Imports the Sequalize constructor from the library
const Sequalize = require('sequelize');

require('dotenv').config();

// creates connection to database
const sequelize = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
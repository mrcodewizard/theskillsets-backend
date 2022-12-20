const config = require('../../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const { DataBaseSchemas } = require('../models');


async function InitializeDb() {
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    const sequelize = new Sequelize(database, user, password, {
        dialect: 'mysql',
        define: {
            freezeTableName: true
        },
    });
    DataBaseSchemas(sequelize);
    await sequelize.sync();
}

module.exports = InitializeDb

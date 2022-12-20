const { DataTypes } = require('sequelize');
function smsLogsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        templateid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cellno: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        studentname: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        smsbody: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        issend: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creationdate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        smscount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalcharacters: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        smstitle: {
            type: DataTypes.STRING(500),
            allowNull: false
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('smslogs', attributes, options);
}
module.exports = smsLogsModel;
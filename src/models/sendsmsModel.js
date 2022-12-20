const { DataTypes } = require('sequelize');
function sendsmsModel(sequelize) {
    const attributes = {
        Id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        templateid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        templatename: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        cellno: {
            type: DataTypes.STRING(15),
            allowNull: false
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
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('sendsms', attributes, options);
}
module.exports = sendsmsModel;
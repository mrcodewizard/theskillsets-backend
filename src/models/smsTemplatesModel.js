const { DataTypes } = require('sequelize');
function smsTemplatesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        templatename: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        smsbody: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        templateid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        shortcode: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        isnew: {
            type: DataTypes.INTEGER,
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

    return sequelize.define('smstemplates', attributes, options);
}
module.exports = smsTemplatesModel;
const { DataTypes } = require('sequelize');
function s3MediaModel(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        fileurl: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        createdby: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        creationdate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        thumbnilurl: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isconverted: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        outputfolderpath: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        convertedfileurl: {
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

    return sequelize.define('s3media', attributes, options);
}
module.exports = s3MediaModel;
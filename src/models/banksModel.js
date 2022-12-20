const { DataTypes } = require('sequelize');
function banksModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('active', 'deactive'),
            allowNull: false,
            defaultValue: "deactive"
        },
        added_by_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        added_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        added_by: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('banks', attributes, options);
}
module.exports = banksModel;
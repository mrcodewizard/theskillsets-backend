const { DataTypes } = require('sequelize');
function rtgItemsModels(sequelize) {
    const attributes = {
        item: {
            type: DataTypes.STRING(200),
            allowNull: false,
            defaultValue: "",
            primaryKey: true
        },
        totalrate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        nrrates: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('rtgitems', attributes, options);
}
module.exports = rtgItemsModels;
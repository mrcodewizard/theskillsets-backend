const { DataTypes } = require('sequelize');
function addToCartModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        courseid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        added_on: {
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

    return sequelize.define('add_to_cart', attributes, options);
}
module.exports = addToCartModel;
const { DataTypes } = require('sequelize');
function orderFormModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        uid: {
            type: DataTypes.STRING(110),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        phoneno: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        seccond_phoneno: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        whatapp: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        skypeid: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        cityname: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        bundle: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        courseid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_date: {
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

    return sequelize.define('order-form', attributes, options);
}
module.exports = orderFormModel;
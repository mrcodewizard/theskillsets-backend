const { DataTypes } = require('sequelize');
function ordersModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        orderno: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        courseid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalprice: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        orderState: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        paymentMethod: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentid: {
            type: DataTypes.INTEGER,
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

    return sequelize.define('orders', attributes, options);
}
module.exports = ordersModel;
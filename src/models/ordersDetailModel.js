const { DataTypes } = require('sequelize');
function ordersDetailModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        courseid: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalprice: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        orderid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        date: {
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

    return sequelize.define('orders_detail', attributes, options);
}
module.exports = ordersDetailModel;
const { DataTypes } = require('sequelize');
function couponModel(sequelize) {
    const attributes = {
        coupon_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        coupon_name: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        coupon_code: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        coupon_amount: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        coupon_percentage: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        coupon_from: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        coupon_to: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        coupon_limit: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        coupon_level: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        coupon_selected: {
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

    return sequelize.define('coupon', attributes, options);
}
module.exports = couponModel;
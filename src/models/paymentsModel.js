const { DataTypes } = require('sequelize');
function paymentsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        sid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "not-verified"
        },
        from_bank: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        to_bank: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        account_no: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        amount: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        trans_date: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        added_on: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        added_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        submit_source: {
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

    return sequelize.define('payments', attributes, options);
}
module.exports = paymentsModel;
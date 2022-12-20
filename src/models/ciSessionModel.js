const { DataTypes } = require('sequelize');
function ciSessionModel(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.STRING(40),
            allowNull: false,
            primaryKey: true
        },
        ip_address: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        timestamp: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        data: {
            type: DataTypes.BLOB,
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

    return sequelize.define('ci_session', attributes, options);
}
module.exports = ciSessionModel;
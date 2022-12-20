const { DataTypes } = require('sequelize');
function statusMetersModel(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        status_name: {
            type: DataTypes.STRING(50),
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

    return sequelize.define('status_meters', attributes, options);
}
module.exports = statusMetersModel;
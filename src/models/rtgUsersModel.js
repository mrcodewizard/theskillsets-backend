const { DataTypes } = require('sequelize');
function rtgUsersModel(sequelize) {
    const attributes = {
        day: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rater: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        item: {
            type: DataTypes.STRING(200),
            allowNull: false,
            defaultValue: ""
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('rtgusers', attributes, options);
}
module.exports = rtgUsersModel;
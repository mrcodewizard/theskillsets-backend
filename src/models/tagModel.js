const { DataTypes } = require('sequelize');
function tagModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        tagname: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        dateon: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        by: {
            type: DataTypes.INTEGER,
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

    return sequelize.define('tag', attributes, options);
}
module.exports = tagModel;
const { DataTypes } = require('sequelize');
function emailTemplatesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        templatename: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        shortcode: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    };

    const options = {
        timestamps: false,
        scopes: {// include hash with this scopewithHash: { attributes: {}, },
            define: {
                //prevent sequelize from pluralizing table names
                freezeTableName: true
            }
        }
    };

    return sequelize.define('emailtemplates', attributes, options);
}
module.exports = emailTemplatesModel;
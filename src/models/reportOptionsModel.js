const { DataTypes } = require('sequelize');
function reportOptionsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        short_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    };

    const options = {
        timestamps: false,
        scopes: {// include hash with this scopewithHash: { attributes: {}, }
        }
    };

    return sequelize.define('report_options', attributes, options);
}
module.exports = reportOptionsModel;
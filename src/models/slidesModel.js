const { DataTypes } = require('sequelize');
function slidesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('active', 'deactive'),
            allowNull: false,
            defaultValue: "active"
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('slides', attributes, options);
}
module.exports = slidesModel;
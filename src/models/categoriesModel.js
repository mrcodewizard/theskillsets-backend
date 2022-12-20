const { DataTypes } = require('sequelize');
function categoriesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('active', 'deactive'),
            allowNull: true
        },
        caturl: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        meta_title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        meta_keywords: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        meta_description: {
            type: DataTypes.TEXT,
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

    return sequelize.define('categories', attributes, options);
}
module.exports = categoriesModel;
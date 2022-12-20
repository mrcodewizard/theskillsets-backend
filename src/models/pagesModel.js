const { DataTypes } = require('sequelize');
function pagesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        page_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        page_desc: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        meta_title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        meta_keywords: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        meta_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        page_added_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        meta_added_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        page_added_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        page_updated_on: {
            type: DataTypes.DATE,
            allowNull: true
        },
        meta_added_on: {
            type: DataTypes.DATE,
            allowNull: true
        },
        meta_updated_on: {
            type: DataTypes.DATE,
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

    return sequelize.define('pages', attributes, options);
}
module.exports = pagesModel;
const { DataTypes } = require('sequelize');
function authorsModel(sequelize) {
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
        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        fb_link: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        insta_link: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        yout_link: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        tw_link: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        alt: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        meta_title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        meta_keywords: {
            type: DataTypes.STRING(255),
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

    return sequelize.define('authors', attributes, options);
}
module.exports = authorsModel;
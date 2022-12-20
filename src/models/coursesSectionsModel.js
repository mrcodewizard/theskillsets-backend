const { DataTypes } = require('sequelize');
function coursesSectionsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        courseid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        section: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        section_title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        meta_title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        meta_keywords: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        meta_desc: {
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

    return sequelize.define('courses_sections', attributes, options);
}
module.exports = coursesSectionsModel;
const { DataTypes } = require('sequelize');
function courseTableModel(sequelize) {
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
        sectionid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lecture: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lecture_title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        embedcode: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        medium_thumb: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        small_thumb: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        pdffile: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(33),
            allowNull: false
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

    return sequelize.define('course_table', attributes, options);
}
module.exports = courseTableModel;
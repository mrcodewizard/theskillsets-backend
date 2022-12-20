const { DataTypes } = require('sequelize');
function freeCoursesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        courseid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sectionid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lecture: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lecture_title: {
            type: DataTypes.TEXT,
            allowNull: false
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
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('free_courses', attributes, options);
}
module.exports = freeCoursesModel;
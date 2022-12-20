const { DataTypes } = require('sequelize');
function coursesModel(sequelize) {
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
        short_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        newprice: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        oldprice: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        language: {
            type: DataTypes.STRING(40),
            allowNull: true
        },
        duration: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        includes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        skilllevel: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        catid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tagid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        authid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        published_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        free: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: true,
            defaultValue: "no"
        },
        is_featured: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
            defaultValue: "no"
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        tagline: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        enroll_count: {
            type: DataTypes.INTEGER,
            allowNull: true
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
            type: DataTypes.TEXT,
            allowNull: true
        },
        meta_description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        sms_name: {
            type: DataTypes.STRING(40),
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

    return sequelize.define('courses', attributes, options);
}
module.exports = coursesModel;
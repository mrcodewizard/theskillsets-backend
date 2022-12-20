const { DataTypes } = require('sequelize');
function ratingsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rating_val: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        total: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        review_title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        posted_on: {
            type: DataTypes.DATE,
            allowNull: true,
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

    return sequelize.define('ratings', attributes, options);
}
module.exports = ratingsModel;
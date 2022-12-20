const { DataTypes } = require('sequelize');
function repliesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        blog_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        reply: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('active', 'deactive'),
            allowNull: false,
            defaultValue: "active"
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

    return sequelize.define('replies', attributes, options);
}
module.exports = repliesModel;
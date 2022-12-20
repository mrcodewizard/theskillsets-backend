const { DataTypes } = require('sequelize');
function twUsersModel(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        oauth_provider: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        oauth_uid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        fname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        lname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        locale: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        oauth_token: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        oauth_secret: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false
        },
        modified: {
            type: DataTypes.DATE,
            allowNull: false
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('twusers', attributes, options);
}
module.exports = twUsersModel;
const { DataTypes } = require('sequelize');
function fbUsersModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
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
        fname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        lname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        locale: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        picture: {
            type: DataTypes.TEXT,
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

    return sequelize.define('fbusers', attributes, options);
}
module.exports = fbUsersModel;
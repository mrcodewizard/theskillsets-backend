const { DataTypes } = require('sequelize');
function sendEmailsModel(sequelize) {
    const attributes = {
        Id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        subject: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fromEmail: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        toEmail: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        attachmentPath: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        isSend: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        ccEmail: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        bccEmail: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        creationDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        emailsendingDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ErrorMessage: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Source: {
            type: DataTypes.STRING(200),
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

    return sequelize.define('sendemails', attributes, options);
}
module.exports = sendEmailsModel;
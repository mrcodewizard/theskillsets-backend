const { DataTypes } = require('sequelize');
function usersModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        fname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        designation: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        course: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tag: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        blog: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        staff: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        member: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        slider: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        reports: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        testimonials: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    };

    const options = {
        timestamps: false,
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('users', attributes, options);
}
module.exports = usersModel;
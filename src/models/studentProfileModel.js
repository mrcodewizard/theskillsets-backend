const { DataTypes } = require('sequelize');
function studentProfileModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        uid: {
            type: DataTypes.STRING(110),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        phoneno: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        seccond_phoneno: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        whatapp: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        skypeid: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cityname: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        freedemos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('student_profile', attributes, options);
}
module.exports = studentProfileModel;
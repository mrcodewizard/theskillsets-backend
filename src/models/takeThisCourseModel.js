const { DataTypes } = require('sequelize');
function takeThisCourseModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        rollno: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        courseid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        active: {
            type: DataTypes.INTEGER,
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

    return sequelize.define('take_this_course', attributes, options);
}
module.exports = takeThisCourseModel;
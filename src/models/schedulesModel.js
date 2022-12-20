const { DataTypes } = require('sequelize');
function schedulesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        schedule_date: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        closing_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: "0000-00-00 00:00:00"
        },
        scheduled_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        is_resolved: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
            defaultValue: "no"
        },
        is_success: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue: "no"
        },
        updated_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: "0000-00-00 00:00:00"
        },
        submitted_on: {
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

    return sequelize.define('schedules', attributes, options);
}
module.exports = schedulesModel;
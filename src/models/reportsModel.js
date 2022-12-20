const { DataTypes } = require('sequelize');
function reportsModel(sequelize) {
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
        report_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        report_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            comment: "1 = complaint initiated 2 = complaint taken up 3 = complaint resolved"
        },
        submited_on: {
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

    return sequelize.define('reports', attributes, options);
}
module.exports = reportsModel;
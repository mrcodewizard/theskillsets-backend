const { DataTypes } = require('sequelize');
function studentSettingsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        sid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lect_view: {
            type: DataTypes.ENUM('list', 'thumb'),
            allowNull: false,
            defaultValue: "list"
        }
    };

    const options = {
        timestamps: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        }
    };

    return sequelize.define('student_settings', attributes, options);
}
module.exports = studentSettingsModel;
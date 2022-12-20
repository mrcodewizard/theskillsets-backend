const { DataTypes } = require('sequelize');
function courseTagsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        course_id: {
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

    return sequelize.define('course_tags', attributes, options);
}
module.exports = courseTagsModel;
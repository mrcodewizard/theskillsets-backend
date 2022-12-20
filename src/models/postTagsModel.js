const { DataTypes } = require('sequelize');
function postTagsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        postid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tagid: {
            type: DataTypes.INTEGER,
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

    return sequelize.define('post_tags', attributes, options);
}
module.exports = postTagsModel;
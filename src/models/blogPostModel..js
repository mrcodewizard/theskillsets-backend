const { DataTypes } = require('sequelize');
function blogPostModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        post_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_catid: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        post_des: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        meta_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_img: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_file: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        post_url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        addby: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        alt: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        meta_title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        meta_keywords: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        download_count: {
            type: DataTypes.INTEGER,
            allowNull: true,
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

    return sequelize.define('blog_post', attributes, options);
}
module.exports = blogPostModel;
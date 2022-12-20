const { DataTypes } = require('sequelize');
function testimonialsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        given_by: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        testimonial: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('active', 'deactive'),
            allowNull: false,
            defaultValue: "active"
        },
        added_on: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_on: {
            type: DataTypes.DATE,
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

    return sequelize.define('testimonials', attributes, options);
}
module.exports = testimonialsModel;
const { DataTypes } = require('sequelize');
function quizesModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        lec_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        created_on: {
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

    return sequelize.define('quizes', attributes, options);
}
module.exports = quizesModel;
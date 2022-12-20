const { DataTypes } = require('sequelize');
function quizTakenModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        take_quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        question_no: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        option_picked: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        right_option: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        is_right: {
            type: DataTypes.STRING(255),
            allowNull: true
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

    return sequelize.define('quiz_taken', attributes, options);
}
module.exports = quizTakenModel;
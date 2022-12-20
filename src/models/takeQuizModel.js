const { DataTypes } = require('sequelize');
function takeQuizModel(sequelize) {
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
        lec_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        attempt_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        question_no: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        total_questions: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        total_marks: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        obtained_marks: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        quiz_status: {
            type: DataTypes.ENUM('in-process', 'completed'),
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

    return sequelize.define('take_quiz', attributes, options);
}
module.exports = takeQuizModel;
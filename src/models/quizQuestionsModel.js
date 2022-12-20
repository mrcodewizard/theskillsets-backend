const { DataTypes } = require('sequelize');
function quizQuestionsModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        question_no: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        question: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        total_options: {
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

    return sequelize.define('quiz_questions', attributes, options);
}
module.exports = quizQuestionsModel;
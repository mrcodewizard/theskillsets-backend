const { DataTypes } = require('sequelize');
function quizOptionsModel(sequelize) {
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
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        option1: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        option2: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        option3: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        option4: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        is_option1_right: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
            defaultValue: "no"
        },
        is_option2_right: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
            defaultValue: "no"
        },
        is_option3_right: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
            defaultValue: "no"
        },
        is_option4_right: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
            defaultValue: "no"
        },
        right_option: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        created_on: {
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

    return sequelize.define('quiz_options', attributes, options);
}
module.exports = quizOptionsModel;
const { DataTypes } = require('sequelize');
function studentsModel(sequelize) {
    const attributes = {
        sid: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        total_balance: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        oauth_uid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        oauth_provider: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        seccond_phoneno: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        whatapp: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        heard_from: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        cityname: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        cellno: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        registration_type: {
            type: DataTypes.ENUM('auto', 'manual'),
            allowNull: false,
            defaultValue: "auto"
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sekey: {
            type: DataTypes.STRING(22),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: true,
            defaultValue: "Pending"
        },
        signup_status: {
            type: DataTypes.ENUM('pending', 'active'),
            allowNull: false,
            defaultValue: "active"
        },
        is_prospective: {
            type: DataTypes.ENUM('yes', 'no'),
            allowNull: false,
            defaultValue: "yes"
        },
        dismiss_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        login_status: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        login_time: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        logout_time: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        inactive_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
        isvalidcellno: {
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

    return sequelize.define('students', attributes, options);
}
module.exports = studentsModel;
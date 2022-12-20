const { DataTypes } = require('sequelize');
function model(sequelize) {
    const attributes = {
        fname: { type: DataTypes.STRING, allowNull: false },
        lname: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        designation: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.BOOLEAN },
        // role: { type: DataTypes.STRING, allowNull: false },
        verificationToken: { type: DataTypes.STRING },
        verified: { type: DataTypes.DATE },
        resetToken: { type: DataTypes.STRING },
        resetTokenExpires: { type: DataTypes.DATE },
        passwordReset: { type: DataTypes.DATE },
        date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated: { type: DataTypes.DATE },
        isVerified: {
            type: DataTypes.VIRTUAL,
            get() { return !!(this.verified || this.passwordReset); }
        }
    };

    const options = {
        timestamps: false,
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('account', attributes, options);
}
module.exports = model;
const { DataTypes } = require('sequelize');
function wishlistModel(sequelize) {
    const attributes = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        courseid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.ENUM('home', 'page'),
            allowNull: false,
            defaultValue: "page"
        },
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    };

    const options = {
        timestamps: false,
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('wishlist', attributes, options);
}
module.exports = wishlistModel;
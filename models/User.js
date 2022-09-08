const {DataTypes, Model} = require('sequelize');
const dbConnetion = require('../db/DBconnetion');


const User = dbConnetion.define('scheduling', {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true
        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
            require: false
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            require: true
        },

});

module.exports = User;
const {DataTypes, Model} = require('sequelize');
const dbConnetion = require('../db/DBconnetion');
const User = require('./User');


const Scheduling = dbConnetion.define('scheduling', {

    date: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

    braidType: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },

});

Scheduling.belongsTo(User);
User.hasMany(Scheduling);

module.exports = Scheduling;


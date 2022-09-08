//Database connection
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('atelie', 'postgres', '', {
        host: 'localhost',
        dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log('Connected');
} catch (error) {
    console.log(`Eror ${error}`);
}

module.exports = sequelize;
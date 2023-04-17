const sequelize = require('sequelize');

const connectSequelize = new sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    port: '5432',
    database: 'places_database',

    define:{
        timestamps: true,
        underscored: true,
        undescoredAll: true
    },
})

module.exports = connectSequelize;
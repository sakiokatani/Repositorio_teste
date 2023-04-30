const { Sequelize } = require('sequelize');
const connectSequelize = require('../database');

const User = connectSequelize.define('user', {
    id:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name:{
        type: Sequelize.STRING,
        allowNull: false
    },

    email:{
        type: Sequelize.STRING,
        isUnique: true,
        allowNull: false,
        validate:{
            isEmail:true
        }
    },

    username:{
        type: Sequelize.STRING,
        isUnique: true,
        allowNull: false
    },

    password:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len: [8,32]
            
            },
        },
        
            
});

module.exports = User;
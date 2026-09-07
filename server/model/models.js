import { Sequelize } from 'sequelize';
import database from '../config/database.js';

const UserSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
}

const User = database.define(
    // Model Name
    'User',
    // Schema
    UserSchema,
    // Other options
    {
        tableName: 'users'
    }
)

export default User
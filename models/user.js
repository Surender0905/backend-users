const { DataTypes } = require("sequelize");
const sequelize = require("../lib/sequelize");

const User = sequelize.define(
    "user",
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        repoCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "users",
        timestamps: true,
    },
);

module.exports = User;

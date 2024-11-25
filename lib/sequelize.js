const { Sequelize } = require("sequelize");
const config =
    require("../config/config")[process.env.NODE_ENV || "development"];

// Set up a connection to the PostgreSQL database using Sequelize
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        logging: config.logging,
    },
);

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;

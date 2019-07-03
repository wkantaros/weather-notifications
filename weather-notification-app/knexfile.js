require('dotenv').config();

module.exports = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: process.env.SQL_PASSWORD,
        database: 'weather_users_db'
    }
}
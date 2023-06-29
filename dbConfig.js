require('dotenv').config()
const dbConfig = {
    host : process.env.HOST,
    user : process.env.DB_USERNAME ,
    password :process.env.DB_PASSWORD,
    db : process.env.DB
}
module.exports = dbConfig
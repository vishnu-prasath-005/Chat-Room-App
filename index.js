require ('dotenv').config();
const dbConfig = require('./dbConfig')
const {Sequelize, DataTypes} = require ('sequelize')
const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: 'mysql'
    })

const dbConnection = (async  _ => {
    try {
        await sequelize.authenticate();
        console.log("Database connected sucessfully")
    }
    catch (error) {
        console.log("Database connection failed" , error)
    }
})()
const dataBase = {};
dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;
dataBase.users = require('./model/userModel')(sequelize, DataTypes);
dataBase.rooms = require('./model/roomModel')(sequelize, DataTypes);
dataBase.posts = require('./model/postModel')(sequelize, DataTypes);

const tables = (async _ => {
    try {
        await dataBase.sequelize.sync({force : false})
        console.log("Table created sucessfully")
    }
    catch (error){
        console.log("Can't create a table", error)
    }
})()
module.exports = dataBase;

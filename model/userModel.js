module.exports = (sequelize, datatypes) => {
    const User = sequelize.define("User", {
    name: {
        type: datatypes.STRING,
        allowNull: false,
        unique :true
    },
    roomId: {
        type: datatypes.STRING,
        allowNull: false,
    }
    })
    return User
}
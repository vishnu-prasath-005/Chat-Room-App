module.exports = (sequelize, datatypes) => {
    const Rooms = sequelize.define("Room", {
        roomId : {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roomName: {
        type: datatypes.STRING,
        unique :true
    },
    })
    return Rooms;
}
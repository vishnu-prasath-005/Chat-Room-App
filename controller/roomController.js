const dataBase = require("../index");
const Room = dataBase.rooms;
const userService = require('../service/userService');

const getRoom = async (request, response) => {
    try {
        const result = await Room.findAll();
        response.status(200).json(result);
    }
    catch (error) {
        response.status(400).json(error);
    }
}

const addRoom = async (request, response) => {
    try {
        const roomName = request.body.roomName;
        const result = await Room.create( { roomName : roomName} );
        response.status(200).json(result);
    }
    catch (error) {
        response.status(400).json("Romm name already exists");
    }
}


module.exports = { getRoom, addRoom}
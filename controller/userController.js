const dataBase = require("../index");
const User = dataBase.users;
const userService = require('../service/userService');

const getUser = async (request, response) => {
    try {
        const  roomId  = request.params.roomId;
        const users = await User.findAll({ where: { roomId: roomId } })
        const newUser = userService.setUser(users);
        const result = await User.create({ name: newUser, roomId: roomId });
        response.status(200).json(result.name);
    }
    catch (error) {
        response.status(400).json(error);
    }
}

module.exports = { getUser }
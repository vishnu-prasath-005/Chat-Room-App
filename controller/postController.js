const dataBase = require("../index");
const Posts = dataBase.posts;

const addPosts = async (request, response) => {
    try {
        const posts  = request.body.posts;
         const roomId = request.params.roomId;
        const result = await Posts.create({ post: posts, roomId: roomId });
        response.status(200).json(result);
    }
    catch (error) {
        response.status(400).json(error);
    }
}

const getPost = async (request, response) => {
    try {
        const roomId = request.params.roomId;
        const result = await Posts.findAll({ where : {roomId : roomId} });
        response.status(200).json(result);
    }
    catch (error) {
        response.status(400).json(error);
    }
}
module.exports = { addPosts , getPost}
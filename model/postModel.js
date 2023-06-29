const Room = require("./roomModel");

module.exports = (sequelize, datatypes) => {
    const Post = sequelize.define("Post", {
        roomId : {
        type: datatypes.INTEGER,
        allowNull: false,
    },
    post: {
        type: datatypes.STRING,
        allowNull: false,
    },
    })
    return Post;
}
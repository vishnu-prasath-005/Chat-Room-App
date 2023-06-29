const router = require("express").Router();
const postController = require("../controller/postController");

router.post("/post/:roomId",postController.addPosts);
router.get("/getpost/:roomId",postController.getPost);
module.exports = router;
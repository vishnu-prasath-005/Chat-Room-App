const router = require("express").Router();
const roomController = require("../controller/roomController");

router.post("/room",roomController.addRoom);
router.get("/room",roomController.getRoom);
module.exports = router;
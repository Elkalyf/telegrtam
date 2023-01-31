const express = require("express");
const chatRoomController = require("../controllers/chatRoomController");

const router = express.Router();

router.route("/summary").get(chatRoomController.getChatRoomSummaryForUser);

router.route("/:chatRoomId").get(chatRoomController.getChatRoom);

module.exports = router;

const express = require("express");
const router = express.Router();
const { handleCreateNewUser, handleLoginUser } = require("../controllers/user");

router.post("/register", handleCreateNewUser);
router.post("/login", handleLoginUser);

module.exports = router;

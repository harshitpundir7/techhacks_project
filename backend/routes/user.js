const express = require("express");
const router = express.Router();
const {
  handleCreateNewUser,
  handleLoginUser,
  handlegetUserData,
} = require("../controllers/user");

router.post("/register", handleCreateNewUser);
router.post("/login", handleLoginUser);
router.get("/data", handlegetUserData);

module.exports = router;

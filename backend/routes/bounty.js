const express = require("express");
const router = express.Router();
const {
  handleCreateNewBounty,
  handleAllBounties,
  handlegetBounty,
  handlegetUserBounties,
} = require("../controllers/bounty");

router.post("/create", handleCreateNewBounty);
router.get("/data", handleAllBounties);
router.get("/get", handlegetBounty);
router.get("/get/user", handlegetUserBounties);
module.exports = router;

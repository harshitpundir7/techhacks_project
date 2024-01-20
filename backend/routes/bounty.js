const express = require("express");
const router = express.Router();
const {
  handleCreateNewBounty,
  handleAllBounties,
  handlegetBounty,
  handlegetUserBounties,
  handleApplyToBounty,
} = require("../controllers/bounty");

router.post("/create", handleCreateNewBounty);
router.post("/apply", handleApplyToBounty);
router.get("/data", handleAllBounties);
router.get("/get", handlegetBounty);
router.get("/get/user", handlegetUserBounties);
module.exports = router;

const express = require("express");
const router = express.Router();
const {
  handleCreateNewBounty,
  handleAllBounties,
} = require("../controllers/bounty");

router.post("/create", handleCreateNewBounty);
router.get("/data", handleAllBounties);
module.exports = router;

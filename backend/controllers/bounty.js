const bounty = require("../models/bounties");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
async function handleCreateNewBounty(req, res) {
  const { title, description, price, issueLink } = req.body;
  const createdBy = req.user.email;
  const randomId = uuidv4();
  console.log(randomId);
  await bounty.create({
    title,
    id: randomId,
    description,
    price,
    status: "open",
    issueLink,
    createdBy,
  });
  res.json({ success: true, id: randomId });
}

async function handleAllBounties(req, res) {
  const data = await bounty.find({});
  res.json({ data });
}

const handlegetBounty = async (req, res) => {
  const id = req.headers.id;
  const data = await bounty.findOne({ id });
  res.json({ success: true, data });
};
const handlegetUserBounties = async (req, res) => {
  const data = await bounty.find({ createdBy: req.user.email });
  res.json({ success: true, data });
};

const handleApplyToBounty = async (req, res) => {
  const { id } = req.headers;
  const description = req.body.applicant.description;
  const newApplication = { user: req.user.email, description };
  //
  const result = await bounty.updateOne(
    { id },
    { $push: { Applications: newApplication } },
  );
  res.json({ status: true, result });
};

module.exports = {
  handleCreateNewBounty,
  handleAllBounties,
  handlegetBounty,
  handlegetUserBounties,
  handleApplyToBounty,
};

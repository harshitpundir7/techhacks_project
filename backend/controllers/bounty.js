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
  console.log(data);
  res.json({ data });
}

// async function handleLoginUser(req, res) {
//   const { email, password } = req.body;
//   // console.log("HEllo " + email);
//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).send({ error: "User doesn't exists!" });
//   const passwordMatch = await bcrypt.compare(password, user.password);
//   console.log(passwordMatch);
//   if (passwordMatch) {
//     const accessToken = jwt.sign({ name: user.name, email }, secretKey);
//     console.log(accessToken);
//     res.json({ accessToken, auth: true });
//   } else {
//     return res.status(400).send({ error: "Invalid Password" });
//   }
// }

module.exports = { handleCreateNewBounty, handleAllBounties };

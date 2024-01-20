const User = require("../models/user");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function handleCreateNewUser(req, res) {
  const { name, email, password, github } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword, github });
  const accessToken = jwt.sign({ name, email }, secretKey);
  res.json({ accessToken, auth: true });
}

async function handleLoginUser(req, res) {
  const { email, password } = req.body;
  // console.log("HEllo " + email);
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ error: "User doesn't exists!" });
  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log(passwordMatch);
  if (passwordMatch) {
    const accessToken = jwt.sign({ name: user.name, email }, secretKey);
    console.log(accessToken);
    res.json({ accessToken, auth: true });
  } else {
    return res.status(400).send({ error: "Invalid Password" });
  }
}

module.exports = { handleCreateNewUser, handleLoginUser };

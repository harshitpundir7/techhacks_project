const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  const [, accessToken] = authorizationHeader.split("Bearer ");
  if (!accessToken) return res.json({ error: "Access Denied" });

  jwt.verify(accessToken, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
  // console.log(accessToken);
};

module.exports = authenticateToken;

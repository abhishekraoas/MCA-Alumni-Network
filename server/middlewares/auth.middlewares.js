const jwt = require("jsonwebtoken");
const user = require("../models/user.model");

const authMiddleware = (req, res, next) => {
  if (!token) {
    return res.status(401).send({ error: "Access denied. No token provided." });
  }

  try {
    const token = req.cookies.jwt;
    const userVerify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = userVerify;
    next();
  } catch (ex) {
    res.status(400).send({ error: "Invalid token." });
  }
};

module.exports = authMiddleware;

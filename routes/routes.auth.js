const router = require("express").Router();
const User = require("../models/model.user.js");
// register
router.post("/register", async (req, res) => {
  const newUser = new User(req.body);

  const savedUser = await newUser.save();

  res.status(201).json(savedUser);
});

// login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  username != usersCred[0].username &&
    res.status(401).json({ message: "username not found !" });

  password != usersCred[0].password &&
    res.status(401).json({ message: "password not found" });

  res.status(200).json({ username, password });
});

module.exports = router;

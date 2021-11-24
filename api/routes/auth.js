const mongoose = require("mongoose");
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//Register a user
router.post("/register", async (req, res) => {
  try {
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });

    //save new user to db and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("Email or Password not valid");

      const userPassword = bcrypt.compareSync(req.body.password, user.password);
      !userPassword && res.status(404).json("Email or Password not valid");

      //respond with relevant info only

      const { password, isAdmin, ...others } = user._doc;
      res.status(200).json(others);
    } else {
      res.status(403).json("Enter email and password");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

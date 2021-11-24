const mongoose = require("mongoose");
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//Update a user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
    } catch (err) {
      res.status(500).json(err);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account.");
  }
});

//Delete a user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account deleted successfully..");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete only your account.");
  }
});

//Get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const queryUsername = req.query.username;

  if (userId || queryUsername) {
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: queryUsername });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(404).json("Please supply userId or username as query");
  }
});

//get friends
router.get("/friends/:id", async (req, res) => {
  try {
    //get user
    const user = await User.findById(req.params.id);
    //get user's followings and from the followings list, get user by id
    const friends = await Promise.all(
      user.followings.map((friendsId) => {
        return User.findById(friendsId);
      })
    );
    //destructure object and respond with relevant info
    let friendsList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendsList.push({ _id, username, profilePicture });
    });
    res.status(201).json(friendsList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow a user
router.get("/:id/follow", async (req, res) => {
  if (req.params.id !== req.body.userId) {
    try {
      const currentUser = await User.findById(req.body.userId);
      const user = await User.findById(req.params.id);

      if (!currentUser.followings.includes(user._id)) {
        await currentUser.updateOne({ $push: { followings: user._id } });
        await user.updateOne({ $push: { followers: currentUser._id } });
        res.status(200).json(`${user.username} has been followed`);
      } else {
        res.status(403).json(`You already follow ${user.username}`);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You cannot follow yourself.");
  }
});

//unfollow a user
router.get("/:id/unfollow", async (req, res) => {
  if (req.params.id !== req.body.userId) {
    try {
      const currentUser = await User.findById(req.body.userId);
      const user = await User.findById(req.params.id);

      if (currentUser.followings.includes(user._id)) {
        await currentUser.updateOne({ $pull: { followings: user._id } });
        await user.updateOne({ $pull: { followers: currentUser._id } });
        res.status(200).json(`${user.username} has been unfollowed`);
      } else {
        res.status(403).json(`You do not follow ${user.username}`);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You cannot unfollow yourself.");
  }
});

module.exports = router;

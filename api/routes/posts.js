const mongoose = require("mongoose");
const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//Create a post
router.post("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const newPost = new Post({
        userId: req.body.userId,
        desc: req.body.desc,
        img: req.body.img,
        likes: req.body.likes,
      });
      const post = await newPost.save();
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//Update a post
router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.userId === req.body.userId) {
    try {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your post.");
  }
});

//Delete a post
router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    if (post.userId === req.body.userId) {
      try {
        await post.deleteOne();
        res.status(200).json("Post has been deleted.");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You can delete only your post.");
    }
  } else {
    res.status(404).json("No matching post found.");
  }
});

//Like or Dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likes.includes(req.body.userId)) {
      await post.updateOne({ $pull: { likes: req.body.userId } }); //Dislike a post
      res.status(200).json("Post has been disliked");
    } else {
      await post.updateOne({ $push: { likes: req.body.userId } }); //Like a post
      res.status(200).json("Post has been liked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get timeline posts

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const currentUserPosts = await Post.find({ userId: currentUser._id });
    const friendsPosts = await Promise.all(
      user.followings.map((following) => {
        return Post.find({ userId: following });
      })
    );
    res.status(200).json(currentUserPosts.concat(...friendsPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's all posts

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

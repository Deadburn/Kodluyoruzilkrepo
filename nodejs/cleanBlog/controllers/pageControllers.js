const Post = require("../models/Post");

exports.getAbout = (req, res) => {
    res.render("about");
  }

exports.addPost = (req, res) => {
    res.render("add_post");
  }

exports.getEditPage = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
  
    res.render("edit", {
      post,
    });
  }
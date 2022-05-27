const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const path = require("path");
const Post = require("./models/Post");
const postController = require("./controllers/postControllers");
const pageController = require('./controllers/pageControllers')

const app = express();

//connect to DB
mongoose.connect("mongodb+srv://cihan:passwd00.@cluster0.uceqxzg.mongodb.net/cleanBlog-db?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB CONNECTION SUCCESFULL")
}).catch((err) =>{
  console.log(err)
});

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// ROUTES
// app.get("/", (req, res) => {
//   const blog = { id: 1, title: "Blog title", description: "Blog description" };

//   res.send(blog);
// });

app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);


app.get("/about", pageController.getAbout);

app.get("/add_post", pageController.addPost);


app.get("/posts/edit/:id", pageController.getEditPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});

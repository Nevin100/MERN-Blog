const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");

//file systems (used in post api):
const fs = require("fs");

//multer upload:
const uploadMiddleware = multer({ dest: "uploads/" });

//Model
const User = require("./models/Users.js");
const Post = require("./models/Posts.js");

//Bcrypt salt string:
const salt = bcrypt.genSaltSync(10);
const secret = "asdfgtheujnc890";

//Middleware and parsing
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

//handling upload files :
app.use("/uploads", express.static(__dirname + "/uploads"));

//Mongoose Connect:
mongoose.connect(
  "mongodb+srv://Test:Test12345@mern.bvkxh.mongodb.net/?retryWrites=true&w=majority&appName=MERN"
);

//Route:
//register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const UserDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(UserDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

//login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const UserDoc = await User.findOne({ username });
  const isPassOk = bcrypt.compareSync(password, UserDoc.password);
  if (isPassOk) {
    jwt.sign({ username, id: UserDoc._id }, secret, {}, (error, token) => {
      if (error) throw error;
      res.cookie("token", token).json({
        id: UserDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("Wrong Token");
  }
});

//profile:
app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  jwt.verify(token, secret, {}, (error, info) => {
    if (error) {
      return res.status(401).json({ error: "Invalid token" });
    }
    res.json(info);
  });
});

//LogOut
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Logout successfull");
});

//Post Creation
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  });
});

//geting of Post:
app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  ); //using for the latest post to come on top
});

//single post getting
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

//editing of post :
app.put("/post", uploadMiddleware.single("file"), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("you are not the author");
    }
    await postDoc.updateOne({
      title,
      summary,
      content,
      cover: newPath ? newPath : postDoc.cover,
    });

    res.json(postDoc);
  });
});

//port listening
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

//Test --> 12345

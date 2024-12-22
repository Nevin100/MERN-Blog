const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/Users.js");
const app = express();
const jwt = require("jsonwebtoken");

//Bcrypt salt string:
const salt = bcrypt.genSaltSync(10);
const secret = "asdfgtheujnc890";
//Middleware and parsing
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

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
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("Wrong Token");
  }
});

app.listen(4000);

//Test --> 12345

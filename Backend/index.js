const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//Model
const User = require("./models/Users.js");

//Bcrypt salt string:
const salt = bcrypt.genSaltSync(10);
const secret = "asdfgtheujnc890";

//Middleware and parsing
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

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

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("Logout successfull");
});
//port listening
app.listen(4000);

//Test --> 12345

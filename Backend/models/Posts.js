//Schema for the Post model

const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: { type: String },
    summary: { type: String },
    constent: { type: String },
    cover: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;

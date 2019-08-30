"use strict";

const config = require("../config");
const Mongoose = require("mongoose").connect(config.dbUri);

Mongoose.connection.on("error", error => {
  console.log("MongoDB error : ", error);
});
const chatUser = new Mongoose.Schema({
  profileId: "string",
  fullName: "string",
  profilePic: "string"
});
let userModel = Mongoose.model("chatUser", chatUser);

module.exports = {
  Mongoose,
  userModel
};

"use strict";
const express = require("express");
const chatCat = require("./app");
const app = express();
app.use(chatCat.session);
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", chatCat.router);

app.listen(app.get("port"), () => {
  console.log("App running on port ", app.get("port"));
});

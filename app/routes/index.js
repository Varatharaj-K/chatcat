"use strict";
const h = require("../helpers");
module.exports = () => {
  let routs = {
    get: {
      "/": (request, response, next) => {
        response.render("login");
      },
      "/rooms": (request, response, next) => {
        response.render("rooms");
      },
      "/chatroom": (request, response, next) => {
        response.render("chatroom");
      },
      "/getSession": (request, response, next) => {
        response.send("My favourite color is " + request.session.favColor);
      },
      "/setSession": (request, response, next) => {
        request.session.favColor = "Blue";
        response.send("Session set");
      }
    },
    post: {},
    NA: (request, response, next) => {
      response.status(400).sendFile(process.cwd() + "/views/404.htm");
    }
  };

  return h.route(routs);
};

"use strict";
const passport = require("passport");
const config = require("../config");
const FacebookStrategy = require("passport-facebook").Strategy;
const h = require("../helpers");
module.exports = () => {
  let authProcessor = (accessToken, refreshToken, profile, done) => {
    h.findOne(profile.id).then(result => {
      if (result) {
        done(null, result);
      } else {
        h.createNewUser(profile)
          .then(createNewUser => done(null, createNewUser))
          .catch(error => console.log("Error when creating user"));
      }
    });
  };
  passport.use(new FacebookStrategy(config.fb, authProcessor));
};

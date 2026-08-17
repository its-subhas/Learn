const express = require("express");
const loginRouter = express.Router();
const { loginCheck } = require("../Controllers/loginCheck");
const {login} = require('../Controllers/login')
const {signup} = require('../Controllers/signup')
const {newuser} = require('../Controllers/newuser')
const {logout} = require('../Controllers/logout')

loginRouter.get("/user", login)
loginRouter.get("/signup", signup)
loginRouter.post("/newuser", newuser)
loginRouter.post("/check", loginCheck);
loginRouter.post("/logout", logout);

exports.loginRouter = loginRouter;



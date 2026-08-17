const path = require("path")
const express = require("express")
const userRoutes = express.Router();
const rootDir = require("../util/path")


userRoutes.get("/", (req,res,next)=>{
  // res.sendFile(path.join(rootDir, 'views', 'home.html') );
  res.render('home', {title:'Home', header:'Welcome to Home page',isLogin: req.isLogin})
})


module.exports = userRoutes;
const express = require("express");
// const path = require("path");
// const rootDir = require("../util/path")
const hostRoutes = express.Router()


hostRoutes.get("/form", (req,res,next)=>{
  // res.sendFile(path.join(rootDir, 'views', 'contact.html'))
  res.render('contact', {title:'Form',header:'Welcome to Contact Page',isLogin: req.isLogin})
})


const houseList = [];

hostRoutes.post("/submited", (req,res,next)=>{
  houseList.push({House:req.body.name})
  // res.sendFile(path.join(rootDir, 'views', 'submited.html'))
  res.render('submited', {title:'Submitted Successfully',isLogin: req.isLogin})
})



hostRoutes.get("/showHome", (req,res,next)=>{
  console.log("Houses: ", houseList)
  res.render('homeList', {houseList:houseList,title:'Registered Houses',header:'Registered Houses',isLogin: req.isLogin})
})


exports.hostRoutes = hostRoutes;
exports.houseList = houseList;
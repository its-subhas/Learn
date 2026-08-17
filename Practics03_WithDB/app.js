const express = require("express");
const multer = require('multer');
const session = require("express-session");
const {store} = require('./Util/dbMongoose');

const Path = require("path");
const RootDir = require("./Util/Path");
const { userRouter } = require("./Routes/userRoutes");
const { hostRouter } = require("./Routes/hostRoutes");
const { notFound } = require("./Controllers/notFound");
const { mongoConnect } = require("./Util/dbMongo");
const mongoose = require("mongoose");
const {MongooseConnect} = require("./Util/dbMongoose");
const { loginRouter } = require("./Routes/loginRoutes");

const app = express();
app.use(express.static(Path.join(RootDir, "Public")));
// app.use("/host/uploads",express.static(Path.join(RootDir, "uploads")));
// app.use("/uploads",express.static(Path.join(RootDir, "uploads")));

 
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "Public/uploads");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + Path.extname(file.originalname);
    cb(null, uniqueName);
  }

});


const fileFilter = (req, file, cb) => {

  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }

};

const multerOptions = {
storage, fileFilter
}

app.set("view engine", "ejs");
app.set("views", "Views");
app.use(express.urlencoded());
app.use(multer(multerOptions).single('housePhoto'));


app.use(session({
  secret: 'adminlogin',
  resave: false,
  saveUninitialized: true,
  store:store
}))

app.use((req,res,next)=>{
  // req.get('Cookie') ? req.get('Cookie').split('=')[1] === 'true' : false;
  req.isLogin = req.session.isLogin;
  next()
})


app.use("/login",loginRouter)


app.use("/host",(req,res,next)=>{
  if (req.isLogin) {
    next()
  } else {
    res.redirect("/login/user")
  }
});

app.use(userRouter);
app.use("/host", hostRouter);
app.use(notFound);


const port = 3000;

MongooseConnect((client) => {
  app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
  });
});

//subhasbiswasofficial_db_user
//8ic9tVWA0bQYndJA
//mongodb+srv://subhasbiswasofficial_db_user:8ic9tVWA0bQYndJA@mern-db.sypsrxp.mongodb.net/?appName=MERN-DB
//mongodb+srv://subhasbiswasofficial_db_user:8ic9tVWA0bQYndJA@mern-db.sypsrxp.mongodb.net/

// mongodb+srv://subhasbiswasofficial_db_user:8ic9tVWA0bQYndJA@mern-db.sypsrxp.mongodb.net/

//  mongodb+srv://subhasbiswasofficial_db_user:8ic9tVWA0bQYndJA@mern-db.sypsrxp.mongodb.net/

// mongoConnect((client)=>{

// });

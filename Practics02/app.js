const express = require("express");
const userRoutes = require('./routes/userRoutes');
const {hostRoutes} = require('./routes/hostRoutes');
const path = require("path");
const rootDir = require("./util/path")


const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded())
app.use(express.static(path.join(rootDir, 'public')))

app.use(userRoutes);
app.use("/host", hostRoutes);
app.use((req,res,next)=>{
  // res.status(404).sendFile(path.join(rootDir,'views', 'no.html'))
  res.render('no', {title:"404 - Page Not Found",isLogin:req.isLogin})
})


const port = 3000;

app.listen(port,()=>{
  console.log(`Server running: http://localhost:${port}`);
})
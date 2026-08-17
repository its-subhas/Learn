exports.Home = (req,res,next)=>{
res.render('Home',{title:'Home', headerText:'Welcome To Home Page',isLogin: req.isLogin})
}

// exports.Home = Home;
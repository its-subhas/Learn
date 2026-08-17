exports.Home = (req,res,next)=>{

res.render('Home',{title:'Home', headerText:'Welcome To Home Page', isLogin: req.session.isLogin, user:req.session.user })
}

// exports.Home = Home;  
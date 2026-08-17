exports.logout = (req,res)=>{
// req.isLogin = true;
// res.cookie("isLogin",false)
// req.session.isLogin = false;
req.session.destroy(()=>{
res.redirect("/login/user")
})

} 
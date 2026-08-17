exports.notFound = (req,res,next) =>{
  res.render('notFound', {title:"Not Found",isLogin: req.isLogin})
}
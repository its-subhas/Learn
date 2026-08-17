const RegisteredHouses = require('../Models/Registered')



exports.Form = (req,res,next)=>{

 
const {houseName, owner, location, rent, bedrooms, description, available} = req.body;  

const Data = new RegisteredHouses(houseName, owner, location, rent, bedrooms, description, available);

Data.save();
 

res.render('Submited', {title:"Submited",headerText:"Form Submited Successfully",isLogin: req.isLogin})
}

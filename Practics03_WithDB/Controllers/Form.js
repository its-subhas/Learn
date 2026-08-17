const Homes = require('../Models/Registered')



exports.Form = (req,res,next)=>{

//  console.log(!req.file ? "File Type Not Match.": "File Type Matched.");
const {houseName, owner, location, rent, bedrooms, description} = req.body;  
const available = req.body.available ? "on" : "";
const housePhoto = "/uploads/" + req.file.filename;
// const housePhoto = req.file.path;

const Data = new Homes({housePhoto,houseName, owner, location, rent, bedrooms, description, available});

Data.save().then((result)=>{
res.render('Submited', {title:"Submited",headerText:"Form Submited Successfully",isLogin: req.isLogin})
}).catch((err)=>{
  console.log("Error Occured !")
  console.log(err)
});
 


}

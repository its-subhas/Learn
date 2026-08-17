const express = require('express');
const {Home} = require("../Controllers/Home");
const {booking} = require("../Controllers/booking");
const {favourite} = require('../Controllers/favourite')
const {addFavourite} = require('../Controllers/addFavourite')
const {addFavouriteDetails} = require('../Controllers/addFavouriteDetails')
const {removeFavourite} = require('../Controllers/removeFavourite')
const {bookHome} = require('../Controllers/bookHome')
const {CancelBooking} = require('../Controllers/CancelBooking')
const {CancelBookingdetails} = require('../Controllers/CancelBookingdetails')





const userRouter = express.Router();

userRouter.get("/", Home);
userRouter.get("/user/booking",booking);
userRouter.post("/user/addFavourite",addFavourite)
userRouter.post("/user/addFavouriteDetails",addFavouriteDetails)
userRouter.post("/user/removeFavourite",removeFavourite)
userRouter.get("/user/favourite",favourite)
userRouter.post("/user/bookHome/:homeId",bookHome)
userRouter.post("/user/CancelBooking",CancelBooking)
userRouter.post("/user/CancelBooking/details",CancelBookingdetails)



exports.userRouter = userRouter;
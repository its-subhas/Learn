const Booking = require("../Models/book");

exports.CancelBookingdetails = (req, res, next) => {
    const homeId = req.body.id;

    Booking.deleteOne({ bookHomeId: homeId })
        .then(() => {
            return res.redirect(`/host/showHome/${homeId}`);
        })
        .catch((err) => {
            return res.redirect(`/host/showHome/${homeId}`);
        });
};
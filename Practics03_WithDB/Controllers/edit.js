const { ObjectId } = require("mongodb");
const Homes = require("../Models/Registered");

exports.edit = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Homes.findOne({_id: new ObjectId(homeId)})
  .then((home) => {

    if (!home) {
      return res.redirect("/host/showHome");
    }

    res.render("edit", {
      title: "Edit",
      headerText: "Edit",
      homeId: homeId,
      editing: editing,
      home: home,isLogin: req.isLogin
    });
  });
};

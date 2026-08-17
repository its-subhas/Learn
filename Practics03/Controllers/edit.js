const RegisteredHouses = require("../Models/Registered");

exports.edit = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  RegisteredHouses.findById(homeId, (home) => {
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

const Users = require("../Models/user");
const bcrypt = require("bcrypt");

exports.loginCheck = (req, res) => {
  const { email, password } = req.body;

  const Message = "Invalid Email or Password !";

  Users.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return Promise.reject("Invalid Email or Password");
      }

      return bcrypt.compare(password, user.password).then((match) => {
        return { user, match };
      });
    })
    .then(({ user, match }) => {
      if (!match) {
        return Promise.reject("Invalid Email or Password");
      }

      const userObj = user.toObject();
      userObj._id = userObj._id.toString();

      userObj.favourites = userObj.favourites.map((id)=> id.toString());
      userObj.bookings = userObj.bookings.map((id)=> id.toString());

  
  
      req.session.isLogin = true;
      req.session.user = userObj;

      req.session.save((err) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Session save failed");
        }

        return res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);

      return res.status(422).render("auth/login", {
        title: "Login",
        isLogin: false,
        result: {
          message: Message,
        },
        user: {
          email: email,
          password: password,
        },
      });
    });
};
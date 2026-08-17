const { check, validationResult } = require("express-validator");
const Users = require("../Models/user");
const bcrypt = require("bcrypt");

exports.newuser = [
  // First Name
  check("firstname")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name should contain minimum 2 characters")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First Name should contain alphabets character only"),

  // Last Name
  check("lastname")
    .trim()
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Last Name should contain alphabets character only"),

  // Email
  check("email")
    .trim()
    .isEmail()
    .withMessage("Please enter valid Email")
    .normalizeEmail(),

  // Password
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character"),

  // Confirm Password
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }

    return true;
  }),

  // User Type
  check("usertype")
    .notEmpty()
    .withMessage("Please select a user type")
    .isIn(["guest", "admin"])
    .withMessage("Invalid user type"),

  // Terms
  check("terms")
    .equals("accepted")
    .withMessage("You must accept the Terms & Conditions"),

  // Check Validation Errors
  (req, res, next) => {
    const { firstname, lastname, email, password, usertype, terms } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        title: "Signup",

        isLogin: false,

        errors: errors.array().map((err) => err.msg),

        oldData: {
          firstname,
          lastname,
          email,
          usertype,
          terms,
        },
      });
    }

    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new Users({
          firstname,
          lastname,
          email,
          password: hashedPassword,
          usertype,
          terms,
        });

        return user.save().then(() => {
          return res.redirect("/login/user");
        });
      })
      .catch((err) => {
        return res.status(422).render("auth/signup", {
          title: "Signup",

          isLogin: false,

          errors: [err.message],

          oldData: {
            firstname,
            lastname,
            email,
            usertype,
            terms,
          },
        });
      });
  },
];

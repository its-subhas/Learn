exports.signup = (req, res, next) => {

    res.render("auth/signup", {
        title: "Signup",
        isLogin: false,
        errors: [],
        oldData: {}
    });

};
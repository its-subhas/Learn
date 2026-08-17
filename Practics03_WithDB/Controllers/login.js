exports.login = (req, res, next) => {
  res.render("auth/login", {
    title: "Login",
    isLogin: true,
    result: null,
    user: null,
  });
};

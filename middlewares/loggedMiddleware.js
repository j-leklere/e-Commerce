function loggedMiddleware(req, res, next) {
  if (req.session.userLogged) {
    return res.redirect("/products");
  }
  next();
}

module.exports = loggedMiddleware;

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.render("login", { error: "" });
});
app.get("/logout", (req, res) => {
  req.session.reset();
  res.redirect("/");
});
app.get("/main", (req, res) => {
  if (req.session && req.session.user) {
    const role = req.session.user.role;
    const userLogged = req.session.user.userName;
    const message = req.session.user.message;

    res.render("main", {
      display_details: {
        displayName: `Welcome [${role}] ${userLogged}  `,
        role: role,
        message: message,
      },
    });
  } else {
    res.render("login", { error: "Please login to continue" });
  }
});
module.exports = app;

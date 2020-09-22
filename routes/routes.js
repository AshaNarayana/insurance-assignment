const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.render("login", { error: "" });
});
app.get("/main", (req, res) => {
  console.log("req.session",req.session)
  console.log("req.session",req.session.user)
  
  if (req.session && req.session.user) {
    console.log("req.session.user",req.session.user)
    const role = req.session.user.role
    const userLogged = req.session.user.userName
    const message = req.session.user.message

    res.render("main", {
      display_details: {
        displayName: `Welcome [${role}] ${userLogged}  `,
        role: role,
        message: message,
      },
    });
  }
  else {
    res.render("login", { error: "Please login to continue" });
  }
  
  
});
module.exports = app;

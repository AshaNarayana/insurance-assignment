const express = require('express');

const app = express()
app.get("/",(req,res)=>{
  res.render("login",{error : ""})
});

// app.post("/main",(req,res)=>{

//  const emailProvided = req.body.email
//  const userLogged = req.body.userName

 
//   res.render("main")
//   return true
// });




module.exports = app;
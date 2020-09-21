const express = require("express");

// const app = express()
// app.get("/",(req,res)=>{
//   res.render("index")
// });

// app.post("/main",(req,res)=>{

//  const emailProvided = req.body.email
//  const userLogged = req.body.userName

//   res.render("main")
//   return true
// });

const validateUser = (userRepository) => {
  return async (req, res) => {
  
   const usersData = userRepository.getAllUsers();
    const emailProvided = req.body.email;
    const userLogged = req.body.userName;

    usersData.map((char) => {
      console.log("char", char);
      if (char.email === emailProvided && char.id === userLogged) {
        res.render("main");
      } else {
        res.redirect("login");
      }
    });

    return true;
  };
};

module.exports = validateUser;

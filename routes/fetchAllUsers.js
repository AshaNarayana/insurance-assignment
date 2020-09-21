const fetch = require("node-fetch");

const fetchAllUsers = (userRepository) => {
  return async (req, res) => {
    
    const response = await fetch(
      "http://www.mocky.io/v2/5808862710000087232b75ac"
    ).catch((error) => {
      console.error('Error:', error);
    });
    const jsonResponse = await response.json();
    userRepository.setAllUsers(jsonResponse.clients);
    const usersData = userRepository.getAllUsers();
    const emailProvided = req.body.email;
    const userLogged = req.body.userName;
    const hasMatch = usersData.find((item) => {
      return item.email === emailProvided && item.name === userLogged;
    });
    if (hasMatch) {
      try{
      const role = userRepository.findRole(userLogged)
      res.render("main",{role : role});
      }catch(error){console.log("error", error)}
    } else {
      const message = "Invalid credentials. Please enter valid credentials"
      res.render("index",{error : message});
    }
  };
};


module.exports = fetchAllUsers;

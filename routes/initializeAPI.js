const fetch = require("node-fetch");
const getAllPolicies = require('./getAllPoliciesFromApi')
const initializeAPI = (userRepository) => {
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
      if(role == "admin"){
        getAllPoliciesFromApi(userRepository);
      }
      res.render("main",{role : role});
      }catch(error){console.log("error", error)}
    } else {
      const message = "Invalid credentials. Please enter valid credentials"
      res.render("login",{error : message});
    }
  };
};


module.exports = initializeAPI;

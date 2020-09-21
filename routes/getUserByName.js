const getUserByName = (userRepository) => {
    return async (req, res) => {
      const userName= req.body.userName
      
      const userData = userRepository.findUserInfoByUserName(userName);
      console.log("userData", userData)
      
     if(userData){
      res.render("display",{display_details :{ displayName: `Details of ${userName}`, result : userData}});
     }
      else {
        res.render("display",{display_details :{ displayName: `Details of ${userName}`, result : "Invalid client name. Please re-enter valid name"}});
      }
    }
  }
  
  module.exports = getUserByName;
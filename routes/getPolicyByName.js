const getPolicyByName = (userId) => {
    
  return async (req, res) => {
    const userId = req.body.userId;
    const userData = userRepository.findUserInfoByUserId(userId);
    if (userData) {
      res.render("display", {
        display_details: {
          displayName: `Details of ${userId}`,
          result: userData,
        },
      });
    } else {
      res.render("display", {
        display_details: {
          displayName: `Details of ${userId}`,
          result: "Invalid user Id. Please enter valid ID",
        },
      });
    }
  };
  }
  
  module.exports = getPolicyByName;
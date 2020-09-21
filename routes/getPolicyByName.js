const getPolicyByName = (userRepository) => {
  
  return async (req, res) => {
    const userName = req.body.userName;
    console.log("userName",userName)
    const policies = userRepository.findPoliciesByUserName(userName);
    if (policies.length > 0) 
    {
      res.render("display", {
        display_details: {
          displayName: `There is/are ${policies.length} policy/policies associated with client ${userName}`,
          result: policies,
        },
      });
    } else {
      res.render("display", {
        display_details: {
          displayName: `Error ${userName}`,
          result: "Invalid client name. Please enter valid client name",
        },
      });
    }
  };
  }
  
  module.exports = getPolicyByName;
const getPolicyByName = (userRepository) => {
  return async (req, res) => {
    const userName = req.body.userName;
    const policies = userRepository.findPoliciesByUserName(userName);
    if (policies) {
      res.render("display", {
        display_details: {
          displayName: `Policies associated with client ${userName}`,
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
const getPolicyByName = (userRepository) => {
  return async (req, res) => {
    const userName = req.body.userName;
    console.log("userName", userName);
    const policies = userRepository.findPoliciesByUserName(userName);
    console.log("policies",policies)
    if (policies) {
      res.render("display", {
        display_details: {
          displayName: `There is/are ${policies.length} policy/policies associated with client ${userName}`,
          result: policies,
        },
      });
    } else {
      res.render("display", {
        display_details: {
          displayName: `Invalid Client Name ${userName}  `,
          result: "Invalid client name. Please enter valid client name",
        },
      });
    }
  };
};

module.exports = getPolicyByName;

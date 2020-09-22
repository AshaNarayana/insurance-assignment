const getUserByPolicyNum = (userRepository) => {
  return async (req, res) => {
    const policyNumber = req.body.policyNumber;
    const userData = userRepository.findUserByPolicyNumber(policyNumber);
    if (userData) {
      res.render("display", {
        display_details: {
          displayName: `Client associated with policy ${policyNumber}`,
          result: userData,
        },
      });
    } else {
      res.render("display", {
        display_details: {
          displayName: `Invalid policy number ${policyNumber}`,
          result: "Invalid policy number. Please re-enter policy number",
        },
      });
    }
  };
};

module.exports = getUserByPolicyNum;

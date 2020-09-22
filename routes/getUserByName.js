const getUserByName = (userRepository) => {
  return async (req, res) => {
    const userName = req.body.userName;
    const userData = userRepository.findUserInfoByUserName(userName);
    if (userData) {
      res.render("display", {
        display_details: {
          displayName: `Details of ${userName}`,
          result: userData,
        },
      });
    } else {
      res.render("display", {
        display_details: {
          displayName: `Invalid Client Name ${userName}`,
          result: "Invalid client name. Please re-enter valid name",
        },
      });
    }
  };
};

module.exports = getUserByName;

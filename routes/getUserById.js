const getUserById = (userRepository) => {
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
          displayName: `Invalid Client ID  ${userId}`,
          result: "Invalid client Id. Please enter valid client id",
        },
      });
    }
  };
};

module.exports = getUserById;

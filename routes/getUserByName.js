const getUserByName = (userId) => {
    return async (req, res) => {
      res.send(userId.findAllUsers())
    }
  }
  
  module.exports = getUserByName;
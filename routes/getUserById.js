const getUserById = (userRepository) => {
    return async (req, res) => {
      const clientId = req.params
      console.log("userId in getUserById req.params",req.params)
      userRepository.findUserInfoByUserId(clientId)
      console.log("here")
     // res.send(userId.findUserInfoByUserId(userId))
    }
  }
  
  module.exports = getUserById;
const fetch = require("node-fetch");
const getAllPoliciesFromApi = (userRepository) => {
  return async (req, res) => {
    try {
      const response = await fetch(
        "http://www.mocky.io/v2/580891a4100000e8242b75c5"
      );
      const jsonResponse = await response.json();
      userRepository.setAllPolicies(jsonResponse);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
};

module.exports = getAllPoliciesFromApi;

// const fetch = require("node-fetch");
// const getAllPoliciesFromApi = (userRepository) => {
//   return async (req, res) => {
//     console.log("yeah am here");
//     try {
//       const response = await fetch(
//         "http://www.mocky.io/v2/580891a4100000e8242b75c5"
//       ).catch((error) => {
//         console.error("Error:", error);
//       });
//       const jsonResponse = await response.json();
//       console.log("jsonResponse", jsonResponse);
//       console.log("am trying to call set all policies");
//       userRepository.setAllPolicies(jsonResponse);
//       return true;
//     } catch (err) {
//       console.error(err);
//       return false;
//     }
//   };
// };

// module.exports = getAllPoliciesFromApi;

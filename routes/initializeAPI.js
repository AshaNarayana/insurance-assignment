const fetch = require("node-fetch");
const initializeAPI = (userRepository) => {
  return async (req, res) => {
    const response = await fetch(
      "http://www.mocky.io/v2/5808862710000087232b75ac"
    ).catch((error) => {
      console.error("Error:", error);
    });
    if (response.status == 200) {
      const jsonResponse = await response.json();
      //store api values in local repository
      userRepository.setAllUsers(jsonResponse.clients);
      let message = "";
      const userLogged = req.body.userName;
      //validate logged in user
      const hasMatch = validateUser(userRepository, req);
      if (hasMatch) {
        try {
          let role = userRepository.findRole(userLogged);
          if (role == "admin") {
            //if its admin user fetch policies from api
            const policyResponse = await fetch(
              "http://www.mocky.io/v2/580891a4100000e8242b75c5"
            ).catch((error) => {
              console.error("Error:", error);
            });
            if (policyResponse.status == 200) {
              const jsonRes = await policyResponse.json();
              userRepository.setAllPolicies(jsonRes.policies);
            } else {
              message = "Policy service not available at the moment";
            }
          }
          res.render("main", {
            display_details: {
              displayName: `Welcome [${role}] ${userLogged}  `,
              role: role,
              message: message,
            },
          });
        } catch (error) {
          console.log("error", error);
        }
      } else {
        message = "Invalid credentials. Please enter valid credentials";
        res.render("login", { error: message });
      }
    } else {
      res.render("login", {
        error: "Server not available. Please login after sometime",
      });
    }
  };
};

const validateUser = (userRepository, req) => {
  const usersData = userRepository.getAllUsers();
  const emailProvided = req.body.email;
  const userLogged = req.body.userName;
  const hasMatch = usersData.find((item) => {
    return item.email === emailProvided && item.name === userLogged;
  });
  return hasMatch;
};

module.exports = initializeAPI;

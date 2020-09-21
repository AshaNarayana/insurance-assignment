class UserInfo {
  constructor() {
    this.memory = {};
  }
  setAllPolicies(str) {
    this.memory["policies"] = str;
    return true;
  }

  setAllUsers(str) {
    this.memory["clients"] = str;
    return true;
  }

  getAllUsers() {
    return this.memory["clients"];
  }

  getAllPolicies() {
    return this.memory["policies"];
  }

  findUserInfoByUserId(userId) {
    const allUsers = this.getAllUsers();
    const userInfo = allUsers.filter((item) => {
      return item.id === userId;
    });
    return userInfo[0];
  }

  findUserInfoByUserName(userName) {
    const allUsers = this.getAllUsers();
    const userInfo = allUsers.filter((item) => {
      return item.name === userName;
    });
    return userInfo[0];
  }

  // findPoliciesByUserName(userName) {
  //   return this.memory[userName];
  // }

  findUserByPolicyNumber(policyNumber) {
    const policies = this.memory["policies"];
    const policyInfo = policies.filter((item) => {
      return item.id === policyNumber;
    });
    if (policyInfo.length > 0) {
      const userId = policyInfo[0].clientId;
      const clients = this.memory["clients"];
      const clientInfo = clients.filter((item) => {
        return item.id === userId;
      });
      return clientInfo[0];
    } else {
      return "Invalid policy number";
    }
  }

  findPoliciesByUserName(userName) {
    const policyArr = this.memory["policies"];
    let policiesLinked = [];
    const clientArr = this.memory["clients"];
    const clientInfo = clientArr.find((item) => {
      return item.name === userName;
    });
   
    if (clientInfo.id) {
      policiesLinked = policyArr.filter((item) => {
        return item.clientId === clientInfo.id;
      });
      
        if (policiesLinked.length > 0) {
         
          return policiesLinked;
        } else {
          return `no policies associated with user ${userName} `;
        }
    } else {
      return "Invalid policy number";
    }
  }

  findRole(userName) {
    const clients = this.memory["clients"];
    const userInfo = clients.filter((item) => {
      return item.name === userName;
    });
    const userRole = userInfo[0].role;
    return userRole;
  }
}

module.exports = UserInfo;

const userInfo = require("../userInfo/userInfoRepositories");

describe("In-Memory User Repository", () => {
  const userRepository = new userInfo();

  userRepository.memory = {
    clients: [
      {
        id: "a0ece5db-cd14-4f21-812f-966633e7be86",
        name: "Britney",
        email: "britneyblankenship@quotezart.com",
        role: "admin",
      },
      {
        id: "c11186ef-049e-48e3-806d-79061804cda1",
        name: "Susie",
        email: "susieblankenship@quotezart.com",
        role: "user",
      },{  
        "id":"e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
        "name":"Manning",
        "email":"manningblankenship@quotezart.com",
        "role":"admin"
     }
    ],
    policies: [
      {
        id: "64cceef9-3a01-49ae-a23b-3761b604800b",
        amountInsured: 1825.89,
        email: "inesblankenship@quotezart.com",
        inceptionDate: "2016-06-01T03:33:32Z",
        installmentPayment: true,
        clientId: "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
      },
      {
        id: "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
        amountInsured: 399.89,
        email: "inesblankenship@quotezart.com",
        inceptionDate: "2015-07-06T06:55:49Z",
        installmentPayment: true,
        clientId: "a0ece5db-cd14-4f21-812f-966633e7be86",
      },{  
        "id":"56b415d6-53ee-4481-994f-4bffa47b5239",
        "amountInsured":2301.98,
        "email":"inesblankenship@quotezart.com",
        "inceptionDate":"2014-12-01T05:53:13Z",
        "installmentPayment":false,
        "clientId":"e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
     }
    ]
  };
 

  it("should set all policies to memory object", () => {
    const status = userRepository.setAllPolicies(
      userRepository.memory["policies"]
    );
    expect(status).toBeTruthy;
  });
  it("should set all users to memory object", () => {
    const status = userRepository.setAllUsers(userRepository.memory["clients"]);
    expect(status).toBeTruthy;
  });
  it("should allow fetch all policies", () => {
    const clients = userRepository.getAllUsers();
    expect(clients).toStrictEqual(userRepository.memory["clients"]);
  });

  it("should return role of user", () => {
    const role = userRepository.findRole("Susie");
    expect(role).toBe("user");
  });
  it("should return user information by user name", () => {
    const userInfoByName = userRepository.findUserInfoByUserName("Susie");
    expect(userInfoByName).toStrictEqual(userRepository.memory["clients"][1]);
  });

  it("should return user information by user id", () => {
    const userInfoById = userRepository.findUserInfoByUserId(
      "a0ece5db-cd14-4f21-812f-966633e7be86"
    );
    expect(userInfoById).toStrictEqual({
      email: "britneyblankenship@quotezart.com",
      id: "a0ece5db-cd14-4f21-812f-966633e7be86",
      name: "Britney",
      role: "admin",
    });
  });

  it("should return user linked to a policy number", () => {
    const userInfoByPolicyId = userRepository.findUserByPolicyNumber("64cceef9-3a01-49ae-a23b-3761b604800b");
    expect(userInfoByPolicyId).toStrictEqual({  
      "id":"e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
      "name":"Manning",
      "email":"manningblankenship@quotezart.com",
      "role":"admin"
   });
  });

  it("should return message 'invalid policy number'", () => {
    const userInfoByPolicyId = userRepository.findUserByPolicyNumber("64ccf9-3a01-49ae-a23b-3761b604800b");
    expect(userInfoByPolicyId).toBe("Invalid policy number");
  });

  it("should return all policies linked to user Manning", () => {
    const policiesLinkedByUser = userRepository.findPoliciesByUserId("Manning");
    expect(policiesLinkedByUser).toStrictEqual([{
      id: '64cceef9-3a01-49ae-a23b-3761b604800b',
      amountInsured: 1825.89,
      email: 'inesblankenship@quotezart.com',
      inceptionDate: '2016-06-01T03:33:32Z',
      installmentPayment: true,
      clientId: 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb'
    },{  
      id:"56b415d6-53ee-4481-994f-4bffa47b5239",
      amountInsured:2301.98,
      email:"inesblankenship@quotezart.com",
      inceptionDate:"2014-12-01T05:53:13Z",
      installmentPayment:false,
      clientId:"e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
   }]);
  });
});

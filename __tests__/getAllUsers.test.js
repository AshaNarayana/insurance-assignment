const app = require('../server/server')
const fetch = require('node-fetch');
const getAllPolicy = require('../routes/getAllPoliciesFromApi')
test("should get all user details from API", async() => {
    const response = await fetch('http://www.mocky.io/v2/580891a4100000e8242b75c5');
    expect(response.status).toEqual(200);
   })

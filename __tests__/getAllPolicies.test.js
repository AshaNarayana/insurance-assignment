const app = require('../server/server')
const fetch = require('node-fetch');

const getAllPolicies = require('../routes/getAllPolicies')

    test('should return true after fetching all policies from API', async () => {
        
      //  console.log("getAllPolicies",getAllPolicies)
        const response = await getAllPolicies();
        expect(response).toBeTruthy;
       // console.log(response);
    });



// test("should get all policy details from API", async() => {
//      let data = await getAllPolicies();
//        expect(data.policies).toEqual('Leanne Graham')
//    })

   

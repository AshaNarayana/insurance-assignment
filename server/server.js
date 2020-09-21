const express = require('express')
const app = express()
const path = require('path')
const userRepository = require('../userInfo/userInfoRepositories')
const userInfo = new userRepository()
//const getAllPoliciesRoute = require('../routes/getAllPoliciesFromApi')(userInfo)
const getUserByIdRoute = require('../routes/getUserById')(userInfo)
const getUserByUserNameRoute = require('../routes/getUserByName')(userInfo)
const getUserByPolicyRoute = require('../routes/getUserByPolicyNum')(userInfo)
const getPolicyByUserNameRoute = require('../routes/getPolicyByName')(userInfo)

const initializeApiRoute = require('../routes/initializeAPI')(userInfo)
//const validateUserRoute = require('../routes/validateUser')(userInfo)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'../views'))
app.use(express.static(path.join(__dirname, "../public")));
app.use('/', require('../routes/routes'))
app.post('/userId', getUserByIdRoute)
app.post('/userName', getUserByUserNameRoute)
//app.post('/admin', getAllPoliciesRoute)
app.post('/policy/userName', getPolicyByUserNameRoute)
app.post('/policyNumber', getUserByPolicyRoute)
//app.get('/policy/getAllPolicies', getAllPoliciesRoute)
//app.get('/users/fetchAllUsers', fetchAllUsersRoute)
app.post('/main', initializeApiRoute)
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that..!")
  });
  
exports.server = app;
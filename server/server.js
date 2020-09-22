const express = require('express')
const app = express()
const path = require('path')
var session = require('client-sessions');
const userRepository = require('../repository/userInfoRepositories')
const userInfo = new userRepository()
const getUserByIdRoute = require('../routes/getUserById')(userInfo)
const getUserByUserNameRoute = require('../routes/getUserByName')(userInfo)
const getUserByPolicyRoute = require('../routes/getUserByPolicyNum')(userInfo)
const getPolicyByUserNameRoute = require('../routes/getPolicyByName')(userInfo)
const initializeApiRoute = require('../routes/initializeAPI')(userInfo)
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'../views'))
app.use(express.static(path.join(__dirname, "../public")));
app.use(session({
    cookieName: 'session',
    secret: 'secretKeyRandom',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  }));
app.use('/', require('../routes/routes'))
app.post('/userId', getUserByIdRoute)
app.post('/userName', getUserByUserNameRoute)
app.post('/policy/userName', getPolicyByUserNameRoute)
app.post('/policyNumber', getUserByPolicyRoute)
app.post('/main', initializeApiRoute)
app.get('/main', require('../routes/routes'))
app.use(function (req, res) {
    res.status(404).send("Sorry can't find that..! :) ")
  });

exports.server = app;
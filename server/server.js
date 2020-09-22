const express = require('express')
const app = express()
const path = require('path')
//var session = require('express-session');
var session = require('client-sessions');
const userRepository = require('../repository/userInfoRepositories')
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
app.use(session({
    cookieName: 'session',
    secret: 'secretKeyRandom',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  }));
app.use('/', require('../routes/routes'))



// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
//   }))

// resave: false,
// saveUninitialized: true,
// secret: "anyrandomstring",
// app.get('/', sessionChecker, (req, res) => {
//     res.render("login", { error: "" });
// });

app.post('/userId', getUserByIdRoute)
app.post('/userName', getUserByUserNameRoute)
//app.post('/admin', getAllPoliciesRoute)
app.post('/policy/userName', getPolicyByUserNameRoute)
app.post('/policyNumber', getUserByPolicyRoute)
//app.get('/policy/getAllPolicies', getAllPoliciesRoute)
//app.get('/users/fetchAllUsers', fetchAllUsersRoute)
app.post('/main', initializeApiRoute)
app.get('/main', require('../routes/routes'))
// app.use(function (req, res, next) {
//     res.status(404).send("Sorry can't find that..!")
//   });
//   app.use(cookieParser());

//   app.use(session({
//     key: 'user_sid',
//     secret: 'somerandonstuffs',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 600000
//     }
// }));
//   app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//         res.clearCookie('user_sid');        
//     }
//     next();
// });

//   var sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.user_sid) {
//         res.redirect('/dashboard');
//     } else {
//         next();
//     }    
// };
//   app.route('/main')
//     .get(sessionChecker, (req, res) => {
//         res.render("main");
//     })
//     .post((req, res) => {

//     }
exports.server = app;
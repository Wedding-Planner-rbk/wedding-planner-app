const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').load();
const models = require("./app/models");
const authController = require('./authcontrollers');
const authRoute = require('../routes/auth')(app);
//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
const {getAllPackages ,getAllServices ,findOnePackage ,findUser ,findProvider,Authentification}= require('./controllers')
const app = express();
const PORT = 3000;
var session = require('express-session');
// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../../dist'));
//Sync Database
models.sequelize.sync().then(function() {
 console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
 
});

app.get('/test', (req, res) => {
    res.status(200).send('Testing app')
})
app.get("/pakages", getAllPackages);
app.get("/services", getAllServices);
app.post("/package",findOnePackage);
app.post("/login/user" ,findUser);
app.post("/login/provider" ,findProvider);





app.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/dashboard',

  failureRedirect: '/signup'
}

));
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
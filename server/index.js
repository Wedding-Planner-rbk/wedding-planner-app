const express = require('express');
const app = express();  
//const passport = require('passport')
const bodyParser = require('body-parser');
//require('dotenv').config({ path: '../.env' });
//const models = require('../app/models');
//require('../routes/auth')(app,passport);
//const session = require('express-session');
//load passport strategies
//require('./app/config/passport/passport.js')(passport, models.user);
//const authController = require('./authcontrollers');
const {getAllPackages ,getAllMusic ,findOnePackage ,findUser ,findProvider, getAllFlowers, getAllCakes, getAllhalls, getAllUsers, addUser}= require('./controllers')
const PORT = 3000;

// For Passport
 
//app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
//app.use(passport.initialize());
 
//app.use(passport.session()); // persistent login sessions

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../../dist'));
//Sync Database
//models.sequelize.sync().then(function() {
 //console.log('Nice! Database looks fine')
//}).catch(function(err) {
 //console.log(err, "Something went wrong with the Database Update!")
 
//});

app.get('/test', (req, res) => {
    res.status(200).send('Testing app')
})
app.get("/pakages", getAllPackages);
app.get("/flowers", getAllFlowers);
app.get("/music", getAllMusic);
app.get("/hall", getAllhalls);
app.get("/cakes", getAllCakes);
app.post("/package",findOnePackage);
app.post("/login/user" ,findUser);
app.post("/login/provider" ,findProvider);
app.get("/pakages", getAllUsers);
app.post("/pakages", addUser);




/*
app.post('/signup', passport.authenticate('local-signup', {
 successRedirect: '/dashboard',

 failureRedirect: '/signup'
}

));
*/
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
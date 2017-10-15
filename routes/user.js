//new file file
var express = require('express');
var router = express.Router();
const models = require('../db');


// var express = require('express');
// var router = express.Router();

//new
module.exports = function(passport) {
	// POST /users/signup    
	router.post('/signup', passport.authenticate('local-signup'), function(req, res) {        
		// res.json({user: req.user}) {
	// router.get('/profile', function(req, res, next){
	// 	User.findById(req.user.id)	
	// 	.then(function(user){
		res.json({
			user: req.user,
			email: "test1@gmail.com",
			password: "test1",
			firstName: "tom",
			lastName: "ford"
			})



		// <<-- passport will add this to the req    
	})
	return router;
};


//old
// module.exports = function(passport) {
// 	// POST /user/signup    
// 	router.post('/signup', function(req, res) {    
// 	    res.send('got the signup request')   
// 	     });
// 	return router;
// };
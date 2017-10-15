var LocalStrategy = require('passport-local').Strategy;module.exports = function(passport) {    
		passport.use('local-signup', 
			new LocalStrategy({        
				usernameField: 'email',        
				passwordField: 'password',        
				passReqToCallback: true    
			}, 
			processSignupCallback)
	)};   // <<-- more on this to come};



function processSignupCallback(request, email, password, done) {
		// first search to see if a user exists in our system with that email    
		UserModel.findOne({        
		where: { 'email' :  email},        
		attributes: ['id']    
		})    
		.then(function(user) {
			if (user) {
			// user exists call done() passing null and false
			return done(null, false);        
			} else { 
				// create the new user
				var userToCreate = req.body; 
				// make this more secure            
				UserModel.create(userToCreate)           
				 .then(function(createdRecord) {
				 //once user is created call done with the created user               
				 createdRecord.password = undefined; 
				  return done(null, createdRecord);           
			   	});        
			}
		});
};
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {     
     done(null, user.id);    
 	});    
  console.log('passport')
}
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User  = require('../models/user');

passport.serializeUser((user,done) =>{
   done(null ,user.id);

});

passport.deserializeUser(()=> {
   User.findById(id , (err,user) => {
      done(err,user);

   });
});

passport.use('local.signup' , new LocalStrategy({
   usernameField :'email',
   passwordField :'password',
   passReqToCallback : true
}, (req,email,password,done) => {
   User.findOne({'email' : email}, (err , user) =>{
      if(err){
         return done(err);
      }
   // if users exists
      if(user){
         return done(null,false);
      }
      // else if does not exits 
       var newUser = new User();
       newUser.fullName = req.body.fullName;
       newUser.password = encrptPassword(req.body.password);
       newUser.email = req.body.email;

      //  saving to database 
      newUser.save((err) => {
         return done(null,newUser)

      })


   } );
}))





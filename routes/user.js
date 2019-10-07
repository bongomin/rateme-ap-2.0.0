var express = require('express');
var router = express.Router();


// route to the homepage 
router.get('/' , (req,res ,next) => {
   res.json({'home':'home'});

})

// route for signup
router.get('/signup' ,(req,res,next) => {
   res.json({'signup_page' :'signup here'})
});

router.post('/signup' , passport.authenticate('local.signup',{
   successRedirect:'res.json({"message" : "successfully signup"})',
   successRedirect:'res.json({"message" : "/")',
   failureRedirect : 'res.json({"message" : "',
   failureFlash : true
}))

module.exports = router;
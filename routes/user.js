var express = require('express');
var passport = require('passport');
var router = express.Router();


// route to the homepage 
router.get('/' , (req,res ,next) => {
   res.json({'home':'home'});

})

// route for signup
router.get('/signup' ,(req,res,next) => {
   res.json({'signup_page' :'signup here'})
});

router.get('/successjson', function(req, res,next) {
   res.json({'msg' :'you are successfully signup using passport local'});
});

router.get('/failurejson', function(req, res,next) {
   res.json({ 'message': 'failed to signupuser to database ' });
});


router.post('/signup', passport.authenticate('local.signup', {
   successRedirect: './successjson',
   failureRedirect: './failurejson',
   failureFlash : true
}));

module.exports = router;
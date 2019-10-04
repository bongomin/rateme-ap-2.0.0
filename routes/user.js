var express = require('express');
var router = express.Router();


// route to the homepage 
router.get('/' , (req,res ,next) => {
   res.json({'home':'home'});

})

// route for signup
router.get('/signup' ,(req,res,next) => {
   res.json({'signup_page' :'signup here'})
}) 

module.exports = router;
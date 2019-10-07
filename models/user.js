var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
   fullName :{type:String , require: true},
   email :{type: String , require:true},
   password : {type:String},
   role:{type:String ,default: ''},
   company :{
      name :{type: String , default :''},
      image :{type: String , default :''}
   },
   passwordResetToken : { type:String ,default: ''},
   passwordResetExpires :{type : Date, default: Date.now}

});

// encrypting pasword using bcrypt
userSchema.methods.encrptPassword = (password) => {
   return bcrypt.hashSync(password ,bcrypt.genSalt(10), null);
}

module.exports = mongoose.model('User' ,userSchema);

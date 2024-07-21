const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
  
  email:{
    type : String
  },


username:{
  type : String

},

location:{
  type : String

},

  password:{
    type : String

  },

  user_authkey:{
    type : String

}
  

});

const user =mongoose.model("user",userschema)

module.exports = user;



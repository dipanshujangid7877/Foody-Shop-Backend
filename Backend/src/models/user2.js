const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name:{
        type : String

    },

  email:{
    type : String
  },

 

  password:{
    type:String

  },

  phone:{
    type:Number
  },

  address:{
    type:String

  },

  pincode:{
    type:Number

  },

  dateofbrith:{
    type:Number

  },

  orders:{
    type:String

  },

  user_authkey:{
    type:String


  },
  gender:{
    type:String
  }
});

const user =mongoose.model("user",userschema)

module.exports = user;



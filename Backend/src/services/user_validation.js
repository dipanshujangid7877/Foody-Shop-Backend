const user_model= require('../models/user');
const bcrypt = require('bcryptjs');

exports.registor= async (req,res) =>{
    try {
        const {email,username,location,password} = req.body;
        console.log(req.body);
        const exectinguser = await user_model.findOne({email})

        


        if(exectinguser){
            return{
                message: "user allredy exits",
                success: false
            }

        }
        const hashedpassword = await bcrypt.hash(password, 10);

        const user=await user_model.create({
            email,
            username,
            location,
            password:hashedpassword,
            

        })

        if(!user){
            return{
                message: "user not created",
                success: false
            }

        }

        return{
            message: "user created successfully",
            success: true,
            user,
        }

        
        
    } catch (error) {
        return{
            message: error,
            success: false
        }
        
    }
}


//login 

exports.login = async (req,res)=>{
    try {
         const {email,password}= req.body;
        console.log(req.body);
         const exectinguser = await user_model.findOne({email})

         if(exectinguser){
            return{
                message: "user allredy exits",
                success: false
            }

        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const user=await user_model.create({
          email,
          password:hashedpassword

        })

          if(!user){
            return{
                message: "user not created",
                success: false
            }

        }
          return{
            message: "user login successfully",
            success: true,
            user,
        }

        
    } catch (error) {
        return{
            message: error,
            success: false
        }
        
    }
}
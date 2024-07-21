const user_model= require('../models/user2');
const bcrypt = require('bcryptjs');


exports.profile = async (req,res)=>{
    try {
         const {name,email,password,phone,address,pincode,dateofbrith,orders,gender}= req.body;
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
          name,
          email,
          password:hashedpassword,
          phone,
          address,
          pincode,
          dateofbrith,
          orders,
          gender



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
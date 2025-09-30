import { Router } from "express"; 
import { UserModel } from "../model/schema.js"; 
import  Jwt  from "jsonwebtoken";
import dotenv from "dotenv";
const UserRouter = Router();
dotenv.config();

UserRouter.post("/signup",async function (req,res){ 

   const { username,password,email} = req.body;
   try { 

       const  check =  await   UserModel.findOne({username});
     if(check){ 
        console.log("Already signed up ! pls sign in")
     }else { 
         await UserModel.create({
            username,
            password,
            email

        })
        res.json({
            message : "signed up succesfully !!!"
        })
     }
    }catch(error){ 
        console.log("error signing up !!",error)
    } 
      

 
})

UserRouter.post("/signin",async function (req,res){
    try {
    
    
    const {email,password} = req.body;
       const user =  await UserModel.findOne({
         email,
        password
       }
        
       )
   
        if(user){
       const token =   Jwt.sign({
            id:user._id

        },process.env.JWT_secret!);



        res.json({
     token,
     message : "signed in !!!"

             
        }
            
        )
       }
       
    }catch{
        res.json({
            message : "error occured while signing in !!!!"
        })
    }

})
export default UserRouter;
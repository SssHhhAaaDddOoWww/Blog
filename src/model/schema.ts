import mongoose, { Schema } from "mongoose";
 

const user = new Schema({
    username : {type:String,required : true } , 
    email : {type:String,required : true ,trim:true},
    password : {type:String,required : true,trim :true}


});

const Blog = new Schema({
    title  :{type : String} ,
    content : { type:String,required :true},
    author  : {type:mongoose.Types.ObjectId,ref:"user"}


},{timestamps:true});
 
export const UserModel = mongoose.model("user",user);
export const BlogModel = mongoose.model("Blog",Blog);
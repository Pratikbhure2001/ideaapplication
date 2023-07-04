/**
 * this will hold the schemas for user
 * it explains the different fields of use how it will be stored in mdb
 */

const mongoose = require("mongoose");/**mongoose ready to use */

const userSchema=new mongoose.Schema({

name: {
    type: String,
    require:true
},
userID:{
    type: String,
    require:true,
    unique: true
}
,
password:{
    type: String,
    require:true,
    
},
email:{
    type: String,
    require:true,
    unique: true
    ,minleng:10,
    lowercase: true
},
userType:{
    type: String,
    require:true,
    default:"CUSTOMER",
enum:["CUSTOMER","ADMIN"]
},

   



},{ timestamps:true})


/**
 * define the collection where it will stored
 */

module.exports=mongoose.model("User",userSchema)
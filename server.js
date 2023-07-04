const express=require('express')
const serverConfig=require('./config/server.config');
const mongoose=require('mongoose');
const dbConfig=require('./config/db.config');
const app=express();

/**
 * logic to connect to mdb and create an ADMIN user
 */
mongoose.connect(dbConfig.DB_URL);/**connect url to mongoose */
const db=mongoose.connection; /**check weather connection is error or not */
db.on("error",()=>{
    console.log("Error while connecting to db");
});
db.once("open",()=>{
    console.log("DB is connected")
});




app.listen(serverConfig.PORT,()=>{
    console.log(`server started on the port number ${serverConfig.PORT}`)

})

import express from "express"
import { client } from "@repo/db/client"

const app=express()


app.use(express.json())


app.post("/signin",async(req,res)=>{

    const name= req.body.name;
    const password= req.body.password;
try{
    await client.user.create({
        data:{
            name,
            password
        }
    })}catch(e){
        console.log(e);
    }

    res.json({
    message:"you have signed up"})

})







app.listen(3001)

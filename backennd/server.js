require('dotenv').config()
const express=require("express")

const mongoose=require("mongoose")
const workoutRoutes=require("./Routes/workouts")
const app=express()
app.use(express.json());
app.use("/api/workouts",workoutRoutes)

mongoose.connect("mongodb://localhost:27017/workout")
.then(()=>{
console.log("connected")
})
.catch((error)=>{

})
app.listen(process.env.PORT,()=>{
    console.log("listening")
})
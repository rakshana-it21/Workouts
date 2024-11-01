const express=require("express");
const {createworkout,getWorkout,getWorkouts, deleteWorkout}=require("../controller/Workoutcontroller")
const router =express.Router()
const Workout=require('../models/WorkoutModel')
router.get("/",getWorkouts)

router.get("/:id",getWorkout)
router.post("/",createworkout)
router.delete("/:id",deleteWorkout)
router.patch("/:id",(req,res)=>{
    res.json({msg:"single workout "})
})

module.exports=router
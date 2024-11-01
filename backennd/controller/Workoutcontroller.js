const Workout=require("../models/WorkoutModel")
const mongoose=require("mongoose")
const getWorkouts=async(req,res)=>{
    const workouts =await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)

}

const getWorkout=async(req,res)=>{
    const{id} =req.params
  if(!mongoose.Types.ObjectId.isValid()){
    return res.status(404).json({error:"No such workout"})
  }
   const workout=await Workout.findById(id)
   if(!workout){
    return res.status(400).json({error:"No such workout "})
   }
  res.status(200).json(workout)
}



const createworkout=async(req,res)=>{
    const{title,reps,load}=req.body
    try{
    const workout= await Workout.create({title,reps,load});
    res.status(200).json(workout)
    }
    catch(error){
      res.status(400).json({error:error.message})
    }
}

const deleteWorkout=async(req,res)=>{
const {id} =req.params
if(!mongoose.Types.ObjectId.isValid()){
    return res.status(404).json({error:"No such workout to delete"})
  }
  const workout=await Workout.findByOneAndDelete({_id})
  if(!workout){
    return res.status(400).json({error:"No such workout "})
   }
   res.status(200).json(workout)
}
const UpdateWorkout=async(req,res)=>{
    
}
module.exports={createworkout,getWorkout,getWorkouts,deleteWorkout}
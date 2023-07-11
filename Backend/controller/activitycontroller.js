const  Activity=require('../model/activityModel');
const mongoose = require('mongoose')

//get all activiety
const getActivitys =async(req,res)=>{
    const activity=await Activity.find({}).sort({createdAt: -1})
    res.status(200).json(activity)
}
//get single activity
const getActivity =async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such activiety'})
    }
    const activity = await Activity.findById(id)
    if(!activity){
        return res.status(404).json({error: 'no such activiety'})
    }
    res.status(200).json(activity)
}

//create new post 
const createActivity =async(req,res)=>{
const { act,description,activityType,dur,date} = req.body
    try {
    const activity = await Activity.create({act, description,activityType,dur,date})
    console.log(activity)
        res.status(200).json(activity)
      }catch(error){
         res.status(400).json({error:error.message})
      }
    }

    // delete activety
       const deleteActivity = async (req,res )=>{
        const {id} = req.params
       
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'no such activiety'})
        }
       const activety =await Activity.findByIdAndDelete({_id: id})
       if(!activety){
        return res.status(404).json({error: 'no such activiety'})
        }
        res.status(200).json(activety)
       }
    //update activity
    const updateActivity = async (req,res )=>{
        const {id} = req.params
       
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'no such activiety'})
        }
        const activety =await Activity.findOneAndUpdate({_id: id},{
            ...req.body
        })
        if(!activety){
            return res.status(404).json({error: 'no such activiety'})
            }
            res.status(200).json(activety)
    }
module.exports={
    getActivitys,
    getActivity,
    createActivity,
    deleteActivity,
    updateActivity
}
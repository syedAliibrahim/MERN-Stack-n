const mongoose= require('mongoose')

const Schema =mongoose.Schema

const activitySchem =new Schema({
   
    act:{
        type:String,
        required: true
    },
    description :{
        type:String,
        required: true
    },
    activityType:{
        type:String,
        required: true
    },
    dur:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    }
},{timestamps: true})

module.exports =mongoose.model('activity', activitySchem)
const mongoose= require('mongoose')

const Schema =mongoose.Schema

const activitySchem =new Schema({
   
    activityTitle:{
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
    duration:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required: true
    }
},{timestamps: true})

module.exports =mongoose.model('activity', activitySchem)
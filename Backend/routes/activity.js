const express =require('express')
const Activity =require('../model/activityModel')
const {createActivity,
        getActivitys,
        getActivity,
        deleteActivity,
        updateActivity
}=require('../controller/activitycontroller')
const router =express.Router();

//get all activity
router.get('/',getActivitys)
    //get single
router.get('/:id',getActivity)
//post activity
router.post('/',createActivity)

router.delete('/:id',deleteActivity)

router.patch('/:id',updateActivity)
module.exports =router
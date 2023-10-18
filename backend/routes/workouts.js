const express=require('express')
const { createWorkout, getSingleWorkout ,getWorkouts,deleteWorkout,updateWorkout } = require('../controllers/workoutController')
const requireAuth= require('../middleware/requireAuth')


const router=express.Router()
//require auth for all workout routes
router.use(requireAuth)

//GET all workouts


//this is done by simple api using 
// router.get('/',(req,res)=>{
//     res.json({mssg:'GET all workouts'})
// })


//to get workouts through controller we use this
router.get('/', getWorkouts)
//GET a single workout
// router.get('/:id',(req,res)=>{
//     res.json({mssg:'GET a single workout'})
// })
//to get workouts through controller we use this
router.get('/:id',getSingleWorkout)
//POST a new workout
router.post('/',createWorkout)
//DELETE a workout
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'DELETE a workout'})
// })
//to delete workouts through controller we use this
router.delete('/:id',deleteWorkout)
//UPDATE a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'UPDATE a workout'})
// })

//to update workouts through controller we use this
router.patch('/:id',updateWorkout)
module.exports=router
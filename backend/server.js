// private data tha you want to hidden is in the env file that will be pushed into git
require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')
const userRoutes=require('./routes/user')



//express app
const app=express()
//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//route handler to get request from react
// app.get('/',(req,res)=>{
//     res.json({mssg:'Welcome to the app'})
// })
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
app.listen(process.env.PORT,()=>{
    console.log('Connected to dbb & Listening on port', process.env.PORT)
})
})

.catch((error)=>{
    console.log(error)
})



// importing express 
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// Routes
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')

dotenv.config()
// express App
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// Routes (https://localhost:3000)
app.get('/', (req, res)=> {
    res.json({msg: 'Welcome to our appln'})
})

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)
// Connect to DB
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    // listen for request
    app.listen(PORT, () => {
    console.log(`Server is up and listening at: http://localhost:${PORT} & connected to DB`)
})
})
.catch((error)=>{console.log(error)})

// Port Number
const PORT = process.env.PORT;



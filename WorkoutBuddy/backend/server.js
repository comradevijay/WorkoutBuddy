// importing express
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// Routes
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')

// express App
const app = express()

// Port Number
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to our appln' })
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} & connected to DB`)
    })
  })
  .catch((error) => {
    console.log('Mongo connection error:', error)
  })

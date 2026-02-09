const  express = require('express')
const Workout = require('../models/workoutModel')
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require Auth for all workouts
router.use(requireAuth)


/**
 * Route : /api/workouts
 * Method: GET
 * Description: Get all workouts
 * Access: Public
 * Parameters: None 
 */

router.get('/',getWorkouts)



/**
 * Route : /api/workouts/:id
 * Method: GET
 * Description: Get a single workout by its id
 * Access: Public
 * Parameters: id 
 */

router.get('/:id',getWorkout)



/**
 * Route : /api/workouts/
 * Method: POST
 * Description: Create/ Add a new workout
 * Access: Public
 * Parameters: None 
 */

router.post('/', createWorkout)

/**
 * Route : /api/workouts/:id
 * Method: DELETE
 * Description: Delete a new workout by its ID
 * Access: Public
 * Parameters: ID 
 */

router.delete('/:id',deleteWorkout)

/**
 * Route : /api/workouts/:id
 * Method: PATCH
 * Description: Update a new workout by its ID
 * Access: Public
 * Parameters: ID 
 */

router.patch('/:id',updateWorkout)


module.exports = router 
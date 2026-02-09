import React, { useEffect } from 'react'

// components
import WorkoutsDetails from '../components/WorkoutsDetails'
import WorkoutForm from '../components/WorkoutForm'

// hooks
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from './../hooks/useAuthContext'

const Home = () => {

  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        'https://workoutbuddy-nt3r.onrender.com/api/workouts/',
        {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        }
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      
      <div className="workouts">
        
        {/* EMPTY STATE */}
        {workouts && workouts.length === 0 && (
          <div className="empty-state">
            <h2>💪 No Workouts Yet</h2>
            <p>
              Start your fitness journey today.<br />
              Add your first workout and stay consistent!
            </p>
          </div>
        )}

        {/* WORKOUT LIST */}
        {workouts && workouts.length > 0 && workouts.map((workout) => (
          <WorkoutsDetails
            key={workout._id}
            workout={workout}
          />
        ))}

      </div>

      <WorkoutForm />

    </div>
  )
}

export default Home

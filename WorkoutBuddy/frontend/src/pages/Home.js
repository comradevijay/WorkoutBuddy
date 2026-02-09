// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'

// componets imported
import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from './../hooks/useAuthContext';

const Home = () => {

  //useState
  // const [workouts, setWorkout] = useState(null)

  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(()=>{
    const fetchWorkouts = async() =>{
      const response = await fetch('/api/workouts/',{
        headers: {
          'Authorization' : `Bearer ${user.token}`

        }
      })
      const json = await response.json()

      if(response.ok){
        //useState
        // setWorkout(json)

        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    if(user){
      fetchWorkouts()
    }
  }, [dispatch, user])

  // key={workout._id}
  return (
    <div className='home'>
        <div className="workouts">
          {
            workouts && workouts.map((workout)=>(
              // <p key={workout._id}>{workout.title}</p>
            <WorkoutsDetails key={workout._id} workout={workout}></WorkoutsDetails>
            ))
          }
        </div>
        <WorkoutForm/>

    </div>
  )
}



export default Home
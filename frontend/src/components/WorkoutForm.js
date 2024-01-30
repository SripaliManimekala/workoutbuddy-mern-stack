import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()  // prevent page refresh on submit

        const workout ={title, load, reps}

        //fetch req to post the new data
        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })//whre post req going to=> /api/workout
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')//reset all the values again after adding one
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added:', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in Kg):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {/* output error if there is an error while adding to the form */}
            { error && <div className="error">{error}</div> }
        </form>
     );
}
 
export default WorkoutForm;
import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    // const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                // setWorkouts(json) no longer need to update local state using this bcz of useworkoutcontext hook
                dispatch({type:'SET_WORKOUTS', payload: json})//we can dispatch an action with type we need
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={ workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
     );
}
 
export default Home;
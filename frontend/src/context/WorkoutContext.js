import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WorkoutsReducer, {
        workouts: null
    })

    dispatch({type: ''})

    return ( 
        <WorkoutsContext.Provider value={  }>
            { children }
        </WorkoutsContext.Provider>
     );
}
 
export default WorkoutContextProvider;
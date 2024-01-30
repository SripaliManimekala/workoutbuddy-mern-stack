import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]//adding new workout to first of this array and other prev workouts
            }  
        default:
            return state
    }
}

//to provide the context to the components in our application we make a
//context provider component..this component will wrap the rest of our application eventually
//inside this component workoutcontext provider we need to return a template..which is workout context
const WorkoutContextProvider = ({ children }) => {//here the children property represent the app component that we wrapped with context provider in index file
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })

    return ( 
        //context should wrap whaterver the parts that our application need access to the context..in this case we will wrap the whole application so all the compomemts 
        //in this application has access to this context..wrap app component is done in index.js..value-whatever value we se here will be available to our components insted of hard coding values here we will use reducer hook
        <WorkoutsContext.Provider value={ {state, dispatch} }>
            { children }
        </WorkoutsContext.Provider>
     );
}
 
export default WorkoutContextProvider;
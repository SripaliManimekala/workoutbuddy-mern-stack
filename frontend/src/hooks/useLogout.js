import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    
    const { dispatch }   = useAuthContext()

    const logout = () => {
        //we dont need to send a request for backend to logout
        //just, 1. remove token from localStorage and 2. redirect(update global state)
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}
 

// This component is to check whether the user is logged in, 
//     if yes, display the dashboard
//     if no, display the log in page 

import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './home'
import Login from '../Login'

const Dashboard = () => {

    const [user,setUser] = useState(null)

    const auth = getAuth() //authenticate the user

    useEffect(() => {
        onAuthStateChanged(auth, (user) => { //2 args: the auth state and a function 
            if(user){ //if user logged in, setUser = user 
                setUser(user)
            } else { //if not, reset the state back to null
                setUser(null)
            }
        }) 
    })

    return (
        <div>
            { user ? <Home /> : <Login /> } 
            {/* if user logged in, display the dashboard. If not, display the log in component */}
        </div>
    )
}

export default Dashboard

//  The useEffect will be used to watch on the auth state changes, to render appropriate components. To do this, I used the onAuthStateChanged method = whenever the authenticated state changed diff components will change. 
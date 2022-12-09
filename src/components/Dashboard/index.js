// This component is to check whether the user is logged in, 
//     if yes, display the dashboard
//     if no, display the log in page 

import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Dashboard = () => {

    const [user,setUser] = useState(null)

    const auth = getAuth() //authenticate the user

    useEffect(() => {
        onAuthStateChanged() //2 args: the auth state and the method 
    }, []) // performed only once <=> []

    return (
        <div>Hello</div>
    )
}

export default Dashboard

//  The useEffect will be used to watch on the auth state changes, to render appropriate components. To do this, I used the onAuthStateChanged method = whenever the authenticated state changed diff components will change. 
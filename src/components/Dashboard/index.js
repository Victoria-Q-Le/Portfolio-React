import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import Login from "../Login"
import Home from "./home"

const Dashboard = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) { //if user is existed/loginin, the user will become user and display the dashboard 
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])

    return (
        <div> 
            {user ? <Home /> : <Login />}
        </div>
    )
}

export default Dashboard


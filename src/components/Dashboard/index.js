import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

const Dashboard = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged()
    }, [])
    
    return (
        <div> 
            Hello from the Dashboard
        </div>
    )
}

export default Dashboard


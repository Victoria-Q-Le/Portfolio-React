import { useRef } from "react"
import { auth } from "../../firebase"

const Home = () => {
    
    const form = useRef()

    const submitPortfolio = (e) => {
        e.preventDefault()
        
    }
    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type='text' placeholder='Name'></input></p>
                <p><textarea type='text' placeholder='Description' /> </p>
                <p><input type='text' placeholder='URL'></input></p>
                <p><input type='file' placeholder='Image'></input></p>
                <button type="submit">Submit</button>
                <button onClick={ () => auth.signOut() }>Sign Out</button>
            </form>
        </div>
    )
}

export default Home

// This comp will contain a form to list out the detail and upload the portforlio to firebase
import { useRef } from 'react'
import {auth} from '../../firebase'

const Home = () => {

    const form = useRef()
    
    const submitPortfolio = (e) => {
        e.preventDefault()
        const title = form.current[0]?.value
        const decription = form.current[1]?.value

    }

    return (
        <div className="dashboard">
           <form ref={form} onSubmit={submitPortfolio()}>
                <p> <input type='text' placeholder = "Title" /> </p>
                <p> <textarea placeholder = "Description" /> </p>
                <p> <input type='text' placeholder = "Link to Site" /> </p>
                <p> <input type='file' placeholder = "Cover" /> </p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Log Out </button>
           </form>
        </div>
    )
}

export default Home 
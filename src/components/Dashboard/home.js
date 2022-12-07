import { useRef } from "react"
import { auth } from "../../firebase"

const Home = () => {

    const form = useRef()

    const submitPortfolio =(e) => {
        e.preventDefault()
        const title = form.current[0]?.value
        const description = form.current[1]?.value
        const url = form.current[2]?.value
        const cover = form.current[3]?.files[0] //input is not text, so type is file and only 1 file so the idx is 0

        console.log(title, description, url, cover);
        
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type='text' placeholder="Title"></input></p>
                <p><textarea placeholder="Description"></textarea></p>
                <p><input type='text' placeholder="Link to Site"></input></p>
                <p><input type='file' placeholder="Cover Photo"></input></p>
                <button type='submit'>Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
                
                                
            </form>
        </div>
    )
} 

export default Home 
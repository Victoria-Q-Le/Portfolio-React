import { auth } from "../../firebase"

const Home = () => {
    return (
        <div className="dashboard">
            <form>
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
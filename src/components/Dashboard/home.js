import {auth} from '../../firebase'

const Home = () => {
    return (
        <div className="dashboard">
           <form>
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
const Home = () => {
    return (
        <div className="dashboard">
           <form>
                <p>
                    <input type='text' placeholder = "Name" />
                </p>
                <p>
                    <textarea placeholder = "Description" />
                </p>
                <p>
                    <input type='text' placeholder = "Link to Site" />
                </p>
                <p>
                    <input type='file' placeholder = "Cover" />
                </p>
           </form>
        </div>
    )
}

export default Home 
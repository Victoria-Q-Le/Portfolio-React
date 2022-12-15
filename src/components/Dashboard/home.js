import { useRef } from "react"
import { auth, storage, db } from "../../firebase"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc } from "firebase/firestore/lite"
import { collection } from "firebase/firestore/lite"

const Home = () => {
    
    const form = useRef()

    const submitPortfolio = (e) => {
        e.preventDefault()
        const name = form.current[0].value
        const description = form.current[1].value
        const url = form.current[2].value
        const image = form.current[3].files[0] //this is not text input, so access the file instead, and only one image to access the first image 
        


        //////////////////GOALS////////////////
        // 1. Upload the images to the firebase storage
        const storageRef = ref(storage, `portfolio/${image.name}`) //2args: the ref to storage - created in firebase.js, and the url - where the image is stored 
        // 2. Then get the image url then save it to the collection/document 
        uploadBytes(storageRef, image).then( //2args: storageRef - the ref to the location I want to store, and the file itself. This is a promise
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({ //after sucessfully uploaded the image, retrieve back a snapshot. On snapshot, receive an url used to store in the collection and later on displayed on the website.
                        name, 
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error)
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error)
                savePortfolio({
                    name,
                    description,
                    url,
                    image: null
                })
            }
        )
    }


    //This function will save the portfolio to the collection
    const savePortfolio = async (portfolio) => {
        console.log(portfolio);
        try {
            await addDoc(collection(db, 'portfolio'), portfolio) //using the collection method to target the collection, the name of the collection firebase is portfolio which is inside the db database. Lastly the file itself aka portfolio
            window.location.reload(false)
        } catch (error) {
            alert('Failed to add portfolio')
        }
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
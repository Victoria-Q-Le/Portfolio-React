import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Marker, TileLayer, MapContainer, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                'service_2b10xcf',
                'template_t0vj9jz',
                refForm.current,
                'mJfk7dECo5y_WOOeH'
            )
            .then (
                () => { 
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    {/* END OF TITLE  */}

                    <p>
                        I'm hoping to expand my career and knowledge in tech. So let's chat!
                    </p>
                    {/* END OF INTRODUCTION P */}

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Please Enter Your Message ' name='message' required ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                    {/* END OF FORM */}

                </div>


                <div className='info-map'>
                    Victoria Le 
                    <br />
                    Boston
                    <br />
                    Massachusetts
                    <br />
                    <span>leqvictoria@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[42.3601,-71.0589]} zoom={8}>
                        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[42.3601,-71.0589]}>
                            <Popup>
                                Victoria lives here, come over for a cup of coffee :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Contact 
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_t0vj9jz',
                refForm.current,
                'mJfk7dECo5y_WOOeH'
            )
            .then (
                alert('Message successfully sent!')
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
                        I took a leap of faith to change my career from medical and hoping to and my first job in tech. So let's chat! 
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
                                    <textarea placeholder='Please Enter Your Message '></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Contact 
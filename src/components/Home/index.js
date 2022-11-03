import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-v.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','c','t','o','r','i','a']
    const jobArray =['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi,
                    <br />
                    I'm 
                    <img src={LogoTitle} alt='developer'/>
                    <AnimatedLetters  letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br />
                    web developer
                </h1>
                <h2>Software Engineer | Full Stack Developer </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home
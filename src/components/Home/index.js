import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-v.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','c','t','o','r','i','a']
    const jobArray =['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])

    // The useEffect to ensure the effect only runs once, after loading the letterClass will be changed to text-animate-hover

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt='developer'/>
                        <AnimatedLetters  letterClass={letterClass} strArray={nameArray} idx={15}/>
                        <br />
                        <AnimatedLetters  letterClass={letterClass} strArray={jobArray} idx={22}/>
                    </h1>
                    <h2>Software Engineer | Full Stack Developer </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>

                <Logo />
            </div>
            {/* THE END OF HOME PAGE CONTAINER */}

            <Loader type='pacman' />
        </>
    )
}

export default Home
import './index.scss' 
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    }, [])
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm an ambitious software engineer looking for a role in tech industry with the opportunity to work with the latest technologies on challenging and diverse projects 
                </p>
                <p>
                    I'm a curious life long learner and perpetually working on improving my stacks one project at a time
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family person, travelling enthusiast and tech-obsessed!
                </p>

            </div>
        </div>
    )
}

export default About
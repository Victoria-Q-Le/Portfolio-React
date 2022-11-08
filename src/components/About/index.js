import './index.scss' 
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000) //set the delay to 3s because no long animation like the home page
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
            {/* END OF TEXT ZONE */}

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#dd0031'/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#dd0031'/>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#dd0031'/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faAngular} color='#dd0031'/>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#dd0031'/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#dd0031'/>
                    </div>
                </div> 
                {/* this holds the 6 sizes of the cube*/}
            </div>

        </div>
    )
}

export default About
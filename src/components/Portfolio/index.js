import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    console.log(portfolioData)
    
    useEffect(() => {
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={"Portfolio".split("")} //instead of entering letter by letter, split fuction was used to split and return the letters in an array
                        idx={15}/>
                </h1>

                <div>{renderPortfolio(portfolioData.portfolio)}</div>
                
            </div>

            <Loader type='pacman' />
        </>
        
    )
}

export default Portfolio
import Loader from 'react-loaders'
import './index.scss'

const Portfolio = () => {
    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    Portfolio
                </h1>

                <Loader type='pacman' />
            </div>
        </>
        
    )
}

export default Portfolio
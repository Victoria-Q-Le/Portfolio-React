import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoV from '../../assets/images/logo-v.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false)


    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoV} alt='logo' />
                <img  className='sub-logo' src={LogoSubtitle} alt='victoria' />
            </Link>
            {/* END OF LOGO AND SUBTITLE */}

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>

                <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
                </NavLink>
            </nav>
            {/* END OF NAV LINKS */}

            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/victoria-qn-le/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>

                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Victoria-Q-Le'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
            {/* END OF OUTSIDE LINKS */}

            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars} 
                color="#ffd700" 
                size='3x' 
                className='hamburger-icon' 
            />
        </div>
    )
}

export default Sidebar
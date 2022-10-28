import { Link } from 'react-router-dom'
import './index.scss'
import LogoV from '../../assets/images/logo-v.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoV} alt='logo' />
                <img  className='sub-logo' src={LogoSubtitle} alt='victoria' />

            </Link>
        </div>
    )
}

export default Sidebar
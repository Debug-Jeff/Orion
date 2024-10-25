import { NavLink } from 'react-router-dom';
import './index.scss'

const Footer = () => {
    return(
        <>
        <footer>
            <div className='Social'>
                <NavLink class='nav-link'><i class='bx bxl-instagram'></i></NavLink>
                <NavLink class='nav-link'><i class='bx bxl-instagram'></i></NavLink>
                <NavLink class='nav-link'><i class='bx bxl-instagram'></i></NavLink>
            </div>
            <div className='Resources'>
                <NavLink class='nav-link'>Github repositories</NavLink>
                <NavLink class='nav-link'>Blog</NavLink>
                <NavLink class='nav-link'>Sign up</NavLink>
            </div>
            <div className='Copyright'>
                <p><i class='bx bx-globe'></i>EN</p>
                <p>&copy;Orion</p>
                <NavLink class='nav-link'>Terms of Service</NavLink>
                <NavLink class='nav-link'>Privacy Policy</NavLink>
            </div>
        </footer>
        </>
    );
}

export default Footer
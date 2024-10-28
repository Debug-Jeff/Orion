import { NavLink } from 'react-router-dom';
import './index.scss'

const Footer = () => {
    return(
        <>
        <footer>
            <div className='social'>
                <p>Social</p>
                <div className='footer-links'>
                    <NavLink class='nav-link'><i class='bx bxl-instagram'></i>Instagram</NavLink>
                    <NavLink class='nav-link'><i class='bx bxl-facebook'></i>Facebook</NavLink>
                    <NavLink class='nav-link'><i class='bx bxl-twitter'></i>Twitter</NavLink>
                </div>
            </div>
            <div className='resources'>
                <p>Resources</p>
                <div className='footer-links'>
                    <NavLink class='nav-link'>Github repositories</NavLink>
                    <NavLink class='nav-link'>Blog</NavLink>
                </div>
            </div>
            <div className='copyright'>
                <p><span>&copy;</span>Orion</p>
                <div className='footer-links'>
                    <NavLink class='nav-link'>Terms of Service</NavLink>
                    <NavLink class='nav-link'>Privacy Policy</NavLink>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer
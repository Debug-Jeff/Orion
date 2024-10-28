import { NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../Assets/logo.png'

const Sidebar = () => {
    return(
        <>
        <section className='sidebar'>
            <div className='sidebar-header'>
                <div className='logo'>
                    <img className='orion-logo' src={Logo}></img>
                    <h2>Orion</h2>
                </div>
                <input type='text' placeholder='Search'></input>
            </div>
            <nav>
                <NavLink activeClassName='active' className='nav-link' to='/'><i class='bx bx-home'></i>Home</NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/about'><i class='bx bx-detail'></i>About</NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/projects'><i class='bx bx-code-block'></i>Projects</NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/events'><i class='bx bx-calendar-event' ></i>Events</NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/blogs'><i class='bx bxl-blogger' ></i>Blogs</NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/testimonials'><i class='bx bx-message-square-dots'></i>Testimonials</NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/contact'><i class='bx bxs-phone-call'></i>Contact</NavLink>
            </nav>
            <div className='sidebar-footer'>
                <NavLink activeClassName='active' className='nav-link' to='/settings'><i class='bx bx-cog' ></i>Settings</NavLink>
                <NavLink activeClassName='active' className='nav-link' to='/help'><i class='bx bx-question-mark' ></i>Help me</NavLink>
                <div className='dark-light-toggle'>
                    <i class='bx bx-toggle-right'></i>
                </div>
            </div>
        </section>
        </>
    );
}

export default Sidebar
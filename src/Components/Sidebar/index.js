import './index.scss'

const Sidebar = () => {
    return(
        <>
        <section className='sidebar'>
            <div className='sidebar-header'>
                <img></img>
                <h2>Orion</h2>
            </div>
            <nav>
                <Navlink>Home</Navlink>
                <Navlink>About</Navlink>
                <Navlink>Event</Navlink>
                <Navlink>Projects</Navlink>
                <Navlink>Blog</Navlink>
                <Navlink>Contact</Navlink>
            </nav>
            <div className='sidebar-footer'>
                <Navlink>Settings</Navlink>
                <Navlink>Help me</Navlink>
                <div className='dark-light-toggle'>
                    <i class='bx bx-toggle-right'></i>
                </div>
            </div>
        </section>
        </>
    );
}

export default Sidebar
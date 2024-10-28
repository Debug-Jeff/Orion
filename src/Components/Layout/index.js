import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Footer from '../Footer'
import './index.scss'

const Layout = () => {
    return(
        <>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </>

    );
}
export default Layout
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

export default function Default() {
    return (
        <>
            <Navbar/>
            <main id="main">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}
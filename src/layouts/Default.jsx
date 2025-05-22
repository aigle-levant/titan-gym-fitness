// libraries
import React from 'react';
import { Outlet } from 'react-router-dom';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
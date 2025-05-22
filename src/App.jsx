// libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// styles
import './styles/main.scss';
// layout
import Default from './layouts/Default.jsx';
// pages
import Home from './pages/Home.jsx';
import ContactUs from './pages/ContactUs.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Services from './pages/Services.jsx';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

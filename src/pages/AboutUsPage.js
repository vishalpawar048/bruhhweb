import React, {useState} from 'react';
import  Navbar  from "../componants/Navbar";
import  Sidebar  from "../componants/Sidebar";
import Footer from '../componants/Footer';
import AboutUs from '../componants/AboutUs/AboutUs';

const AboutUsPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <AboutUs/>
        <Footer />

        </>
    )
}

export default AboutUsPage

import React from 'react';
import './Header.css';
import logo from '../photos/logo.png';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {

    const toggle = ()=>{
        const nav = document.getElementById('active');
        
        nav.classList.toggle('active');
    }

    return (
        <div className='header'>
            <div className='h-container flexCenter paddings innerWidth'>
                <img src={logo} alt='logo' width={100} />
                <div className='h-menu flexCenter' id='active'>
                    <a href='#residencies'>Residencies</a>
                    <a href='#value'>Our Value</a>
                    <a href='#contact-us'>Contact Us</a>
                    <a href='#get-started'>Get Started</a>
                    <button className='button'><a href='mailto:singhabhishek91420@gmail.com'>Contact</a></button>
                </div>
                <div className='menu-icon' onClick={toggle}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Header

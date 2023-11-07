import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='paddings flexCenter innerWidth f-container'>
                <div className='flexColStart f-left'>
                    <img src='/photos/logo2.png' width={120} alt='footer' />
                    <span className='secondaryText'>
                        Our vision is to make all people <br />
                        the best place to live for them
                    </span>
                </div>
                <div className='flexColStart f-right'>
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 4571, USA</span>
                    <div className='flexCenter f-menu'>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

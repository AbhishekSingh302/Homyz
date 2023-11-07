import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div id='get-started' className='getStarted'>
        <div className=' paddings innerWidth g-container'>
            <div className='flexColCenter inner-container'>
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from us
                    <br/>
                    Find your residence soon
                </span>
                <button className='button'>
                    <a href='mailto:singhabhishek91420@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>      
    </div>
  )
}

export default GetStarted

import React from 'react';
import './Hero.css';
import heroImage from '../photos/hero-image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='flexCenter paddings innerWidth hero-container'>
        <div className='flexColStart hero-left'>
            <div className='hero-title'>
                <div className='orange-circle'/>
                <h1>Discover<br/> Most Suitable<br/> Property</h1>
            </div>
            <div className='flexColStart hero-des'>
                <span className='secondaryText'>Find a variety of properties that you very eaisly</span>
                <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
            </div>
            <div className='flexCenter search-bar'>
                <input type='search'/>
                <button className='button'>Search</button>
            </div>
            <div className='flexCenter stats'>
                <div className='flexColCenter stat'>
                    <span>8000<span>+</span></span>
                    <span className='secondaryText'>Primium Products</span>
                </div>
                <div className='flexColCenter stat'>
                    <span>1950<span>+</span></span>
                    <span className='secondaryText'>Happy Customers</span>
                </div>
                <div className='flexColCenter stat'>
                    <span>28<span>+</span></span>
                    <span className='secondaryText'>Award Winning</span>
                </div>
            </div>
        </div>
        <div className='hero-right'>
            <div className='image-container'>
                <img src={heroImage} alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

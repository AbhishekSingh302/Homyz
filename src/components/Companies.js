import React from 'react';
import './Companies.css';
import img1 from '../photos/prologis.png';
import img2 from '../photos/tower.png';
import img3 from '../photos/equinix.png';
import img4 from '../photos/realty.png';

const Companies = () => {
  return (
    <div company>
      <div className='paddings flexCenter innerWidth c-container'>
        <img src={img1} alt=''/>
        <img src={img2} alt=''/>
        <img src={img3} alt=''/>
        <img src={img4} alt=''/>
      </div>
    </div>
  )
}

export default Companies

import React from 'react';
import './Value.css';

const Value = () => {
  return (
    <div id='value' className='value'>
        <div className='paddings innerWidth flexCenter v-container'>
            <div className='v-left'>
                <div className='image-container'>
                    <img src='/photos/value.png' alt='value'/>
                </div>
            </div>
            <div className='flexColStart v-right'>
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>
                    We always ready to help by providing the best services for you
                    <br/>
                    We believe a good blace to live can make your life better
                </span>
                <div className='flexColStart accordianItem'>
                    <div className='accordian-div'>
                        <span>&lt;</span>
                        <span>Best interest rates on the market</span>
                        <span>&gt;</span>
                    </div>
                    <div className='accordian-div'>
                        <span>&lt;</span>
                        <span>Prevent unstable prices</span>
                        <span>&gt;</span>
                    </div>
                    <div className='accordian-div'>
                        <span>&lt;</span>
                        <span>Best price on the market</span>
                        <span>&gt;</span>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Value

import React from 'react';
import './Contact.css';
import { BiSolidPhoneCall,BiSolidMessageDetail,BiSolidVideo,BiSolidChat } from "react-icons/bi";


const Contact = () => {
    return (
        <div id='contact-us' className='contact'>
            <div className='paddings innerWidth flexCenter c-container'>
                <div className='flexColStart c-left'>
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'> we always ready to help by providing the best service for you we believe a good blace to live can make your life better</span>
                    <div className='flexColStart contactModes'>
                        <div className='flexStart row'>
                            <div className='flexColStart mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BiSolidPhoneCall size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Call Now</div>
                            </div>
                            {/* {second mode} */}
                            <div className='flexColStart mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BiSolidChat size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Chat Now</div>
                            </div>
                        </div>
                        {/* {second row} */}
                        <div className='flexStart row'>
                            <div className='flexColStart mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BiSolidVideo size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Video Call Now</div>
                            </div>
                            {/* {second mode} */}
                            <div className='flexColStart mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BiSolidMessageDetail size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Message Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flexCenter c-right'>
                    <div className='image-container'>
                        <img src='/photos/contact.jpg' alt='contact' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

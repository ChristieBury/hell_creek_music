import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from 'react-social-icons';
import HellCreekLogo from "../../../static/assets/images/hell-creek-logo.jpg";


// import Icons from "../helpers/icons-fonts";


import autoprefixer from 'autoprefixer';

 
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
       
    }
    render() {
        return (
            <div className="home-cover-wrapper">
                    <Link to="/"></Link>
                    <div className='top-location-wrapper'>
                        <div className="location-wrapper">

                            <div className="left-column">
                                <div className="phone-wrapper">
                                        <FontAwesomeIcon icon="phone-alt"/>
                                    <div className='phone-line'>Phone- (406) 377-7977</div>
                                </div>
                            </div>
                        
                            <div className="right-column">
                                <div className="address-wrapper">
                                    <FontAwesomeIcon icon="map-marker-alt"/>
                                    <div className='top-line'>Address: 101 N Merrill Ave.,<br/></div>
                                    <div className='location-line'>Glendive, MT 59330</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='store-image-wrapper'>
                        <div className="image-wrapper">
                        </div>
                    </div>
                <div className='map-wrapper'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.721325737985!2d-104.71566368419195!3d47.1045335305177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5325273755b8991f%3A0x3c4e9fbc1a848b15!2s101%20N%20Merrill%20Ave%2C%20Glendive%2C%20MT%2059330!5e0!3m2!1sen!2sus!4v1587335026380!5m2!1sen!2sus"></iframe>
                </div>

                <div className='home-footer'>

                    <div className='logo-footer'>
                        <img className='footer-image' src={HellCreekLogo} alt='Hell Creek Music & More'/>
                    

                    </div>

                    <span className='phone'>
                        (406)-377-7977
                    </span>

                    <div className='hours'>
                        <div className='m-f-hours'>Mon-Fri 10am - 6pm</div>
                        <div className='saturday-hours'>Saturday 10am - 5pm</div>
                        <div className='sunday-hours'>Sunday Closed</div>
                    </div>

                       
                    
                    <div className='facebook-wrapper'>
                            <SocialIcon network="facebook" style={{height:25, width:25}} url="https://www.facebook.com/hellcreekmusicandmore"/>
                    </div>

                        <div className='copyright-wrapper'>
                            &copy; 2003 Hell Creek Music & More LLC | All rights reserved
                        </div>

                </div>
            </div>
        );
        
    }
}
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Trex from '../../../static/assets/images/t-rex2-img.jpg';
import Home from "./home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from 'react-social-icons';

 
export default class Contact extends Component {
    constructor() {
        super()

    }
    
    
    render() {
        return (
            <div className="contact-cover-wrapper">
                <Link to="/contact"></Link>
                    <div className="left-contact-wrapper">
                        <img className="trex" src={Trex}></img>
                    </div>

                <div className="right-contact-column-wrapper">
                    <div className="phone-wrapper">
                        <div className='phone-wrapper-icon'>
                            <FontAwesomeIcon icon="phone-alt"/>
                        </div>
                            
                        <div className='text'>
                            Call us! (406) 377-7977
                        </div>
                    </div>

                    <div className="contact-map-wrapper">
                        <div className="contact-map-icon-wrapper">
                        
                            <Link to="/"><FontAwesomeIcon icon="map-marker-alt"/></Link>
                          
                            
                            </div>
                            <div className="contact-address-wrapper">

                                <div className="contact-top-address-line">
                                    101 N Merrill Ave
                                </div>

                                <div className="contact-address-second-line">
                                    Glendive, Montana 59330
                                </div>
                                

                        </div>
                    </div>

                    <div className="email-wrapper">

                        <div className="email-icon-wrapper">
                            <FontAwesomeIcon icon="envelope"/>
                        </div>

                            <div className="contact-email-wrapper">
                                <button><a className="email-name" target="_blank" href= "mailto:hellcreek@midrivers.com?subject=I have a question">hellcreek@midrivers.com</a>
                                </button>
                            </div>
                    
                        
                            <div className="click-to-email-text">
                                Click to email
                            </div>
                    </div>

                    
                        <div className="contact-facebook-wrapper">
                            <SocialIcon network="facebook" style={{height:25, width:25}} url="https://www.facebook.com/hellcreekmusicandmore"/> 
                            
                            <div className="hell-creek-facebook">Hell Creek Music & More
                            </div>
                        </div>

                </div>
           
               
                {/* from npm website */}
                {/* ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body); */}
            </div>
        ); <FontAwesomeIcon/>
    }
}
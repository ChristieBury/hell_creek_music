import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homepageImage from "../../../static/assets/images/main-music-photo-img.jpg";

 
export default class Home extends Component {
    constructor() {
        super()
       
    }
    render() {
        return (
            
            <div className="home-wrapper">
                <h1>Home</h1>
                <div className="left-column"></div>
                
                <div className="center"
                style={{
                    backgroundImage:`url(${homepageImage})`
                }}>

                </div>
                <div className="right-column"></div>
            <Link to="/"></Link>
            
                
            </div>
        );<FontAwesomeIcon/>
    }
}
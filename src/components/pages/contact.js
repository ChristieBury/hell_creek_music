import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
export default class Contact extends Component {
    constructor() {
        super()
       
    }
    render() {
        return (
            <div className="contact-wrapper">
            <Link to="/contact"></Link>
           
                <h1>Contact</h1>
                {/* from npm website */}
                {/* ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body); */}
            </div>
        ); <FontAwesomeIcon/>
    }
}
import React, { Component } from 'react';
import { Link } from "react-router-dom"
 
export default class Contact extends Component {
    constructor() {
        super()
       
    }
    render() {
        return (
            <div className="contact-wrapper">
            <Link to="/contact"></Link>

                <h1>Contact</h1>
            </div>
        );
    }
}
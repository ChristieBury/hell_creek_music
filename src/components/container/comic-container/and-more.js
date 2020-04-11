import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
export default class AndMore extends Component {
    constructor() {
        super()
       // the book index would go here
    }
    render() {
        return (
            <div className="comic-wrapper">
            <Link to="/comic-container/and-more"></Link>
           
                <h1>and More...</h1>
            </div>
        ); <FontAwesomeIcon/>
    }
}
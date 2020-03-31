import React, { Component } from 'react';
import { Link } from "react-router-dom"
 
export default class Home extends Component {
    constructor() {
        super()
       
    }
    render() {
        return (
            <div className="home-wrapper">
            <Link to="/"></Link>

                <h1>Home</h1>
            </div>
        );
    }
}
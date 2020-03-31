import React, { Component } from 'react';
import { Link } from "react-router-dom"
 
export default class Artists extends Component {
    constructor() {
        super()
       
    }
    render() {
        return (
            <div className="artists-wrapper">
            <Link to="/artists"></Link>

                <h1>Artists</h1>
            </div>
        );
    }
}
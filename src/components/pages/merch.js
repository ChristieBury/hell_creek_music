import React, { Component } from 'react';
import { Link } from "react-router-dom"
 
export default class Merch extends Component {
    constructor() {
        super()
       
    }
    render() {
        return (
            <div className="merch-wrapper">
            <Link to="/merch"></Link>

                <h1>Merchandise</h1>
            </div>
        );
    }
}
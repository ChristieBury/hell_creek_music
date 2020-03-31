import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
 
export default class ReactContainer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="nav-container">
                <div className="link-container">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>

                    <NavLink to="/artists" activeClassName="nav-link-active">
                        Artists
                    </NavLink>

                    <NavLink to="/merch" activeClassName="nav-link-active"> 
                        Merchandise
                    </NavLink>

                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>
                <h1></h1>
            </div>
        );
    }
}
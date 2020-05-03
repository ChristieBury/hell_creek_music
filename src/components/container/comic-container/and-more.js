import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ComicIndex from './comicIndex';
import AddComic from './addComic';
import DeletedLanding from './deleteLanding';

export default class AndMore extends Component {
    constructor() {
        super()
       // the book index would go here
    }
    render() {
        return (
            <div className="comic-wrapper">

                <div className='comic-header'>
                    <h1>We Carry Comics!</h1>
                </div>
                <div className='comic-image-wrapper'>

                    
                <ComicIndex/>
                </div>
                <Link to="/container/comic-container/and-morend-more"></Link>
                <AddComic/> 
                {/* <DeletedLanding/> */}
            </div>
        ); <FontAwesomeIcon/>
    }

    
}
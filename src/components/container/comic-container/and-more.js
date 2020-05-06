import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComicPano from "../../../../static/assets/comic-images/comic-pano.jpg";
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
                    <img className="comic-pano-img" src={ComicPano}></img>
                <div className='comic-image-wrapper'>

                    
                <ComicIndex/>
                <AddComic history={this.props.history}/> 
                <Link to="/container/comic-container/and-more-and-more"></Link>
                </div>
                
            </div>
        ); 
    }

    
}
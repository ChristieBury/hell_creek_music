import React  from 'react';
 
import { Link } from 'react-router-dom'


 
export default function AddedLanding(){

        return (
            <div className="added-book-wrapper">
                <h1>You added a book.</h1>
                <Link to={'/container/comic-container/and-more'}>View All Books</Link>
            </div>
            
        );
    }

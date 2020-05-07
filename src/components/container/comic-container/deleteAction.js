import React from 'react';
import { Link } from 'react-router-dom';

export default function DeleteAction(props) {
    function handleClick(){
        fetch(`https://hell-creek-music-website.herokuapp.com/container/comic-container/and-more/delete/${props.id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            return response.json()
            // console.log('response',response)
        })
        .catch(err => {
            console.log("deleted error", err)
        })
    }
    return (
        <div className="delete-action-wrapper">
            {/* <DeletedLanding/> */}
            <Link 
            onClick={handleClick} 
            to={'/deleted_book'}>
                <button type="submit">Delete Comic</button>
            </Link> 
        </div>
    )
}

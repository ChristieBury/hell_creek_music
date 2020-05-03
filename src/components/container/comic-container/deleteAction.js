import React from 'react';
import { Link } from 'react-router-dom';

import DeletedLanding from './deleteLanding';

export default function DeleteAction(props) {
    function handleClick(){
        fetch(`http://127.0.0.1:5000/delete/${props.id}`,{
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

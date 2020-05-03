import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import DeleteAction from "./deleteAction";

export default class ComicIndex extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            books: []
        }
    }
  
    componentDidMount() {
      fetch('http://127.0.0.1:5000/comic-books', {
        method: 'GET',
        headers: {
          'accepts': 'application/json',
          'Content-Type': 'application/json'
        }

      }).then(response => {
        return(response.json())
      }).then(data => {
          this.setState({books:data})
      }).catch(e => {
        console.log('fetch error', e)
      })
    }

    render() {
      console.log('state', this.state)
        return (
            <div className='content'>
                <h1 className='steves-comic-pick'>Steve's top 5 comic pick at Hell Creek Music & More</h1>
                {this.state.books.map((book) => ( 
                <div className="book-title-author" key={book[0]}>
                    <h2>Comic Book Title: {book[1]}</h2>
                    <h3>Author: {book[2]}</h3>
                    <div className='links'>
                        <Link to={`/view_book/${book[0]}`} id={book[0]}>View Comic</Link>
                        {/* <DeleteAction id={book[0]}/> */}
                    </div>

                </div>
                ))}
            </div>
        );
    }
}
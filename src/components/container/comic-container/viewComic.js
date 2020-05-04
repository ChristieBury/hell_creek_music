import React, { Component } from 'react';

import UpdateBook from "./updateComic";
import DeleteAction from './deleteAction';
import AddComic from './addComic';

 
export default class ViewBook extends Component {
    constructor(props) {
    super(props)

    this.state = {
        singleBook:[]
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
        console.log(id)
       

        fetch(`http://127.0.0.1:5000/comic-book/${id}`, {
        method: 'GET',
        headers:{
            'accepts': "application/json",
            "Content-Type" : "application/json"
        }
        }).then(response => {
            return response.json()})
        .then(data => {this.setState(
            {singleBook: data})
            console.log(data)
        }).catch(err => {
            console.log('Fetch error', err)
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className='info-wrapper'>
                <div className="comic-name-wrapper">
                <h2 style={{color:"#ff9100"}}>Comic Update</h2>
                </div>
                {/* <hr/> */}
                <div className='book-title'>
                    {this.state.singleBook[1]}
                </div>

                <div className='book-author'>
                    {this.state.singleBook[2]}
                </div>
                <UpdateBook ourProp = {this.state.singleBook}/>
                <DeleteAction id={this.state.singleBook[0]}/>
                
                
                
            </div>
        );
    }
}
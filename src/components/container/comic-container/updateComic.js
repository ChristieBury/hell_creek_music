import React, { Component } from 'react';
import {Link} from 'react-router-dom';


 
export default class UpdateBook extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            id:'',
            title:"",
            author: "",
            // image:"",
            formHidden: true
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.editBook=this.editBook.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        let id = this.state.id;
        let title = this.state.title;
        let author = this.state.author;
        // let image = this.state.image;

        fetch(`https://hell-creek-music-website.herokuapp.com/update_comic/${id}`, {
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({title:title, author:author})
        }).then(res => res.json())
        .then(responseData => {return responseData})
        // .then(() => {this.props.history.push('/')})
        .catch(err => console.log("update error", err))
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editBook() {
        this.setState({id:this.props.ourProp[0]})
        this.setState({title:this.props.ourProp[1]})
        this.setState({author:this.props.ourProp[2]})
        this.setState({formHidden:!this.state.formHidden})
    }
        
    render() {
        return (
            <div>
                <div className='update-button-wrapper'>
                    <button 
                    onClick={this.editBook}>Update Comic Form</button>
                    
                </div>
                    <form onSubmit={this.handleSubmit} style={{visibility: this.state.formHidden ? "hidden" : "visible"}}className='save-submit-button' onSubmit={this.handleSubmit}> 
                    
                   
                    
                        <div className='text-title-input'>
                            <input
                                type= "text"
                                name="title" placeholder=""
                                value= {this.state.title}
                                onChange={this.handleChange} style={{ width: "300px", height: "20px"}}>
                            </input>
                        </div>

                        <div className='text-author-input'>
                            <input 
                                type= "text"
                                name="author" placeholder=""
                                value= {this.state.author}
                                onChange={this.handleChange} style={{ width: "300px", height: "20px"}}>
                            </input>
                        </div>
                        <button className='save-update-button' 
                        type="submit" 
                        value="submit"
                        action="">Save Comic Update</button> 
                       
                        
                    </form>
                        <Link to={'/container/comic-container/and-more'}> View All Books</Link>
            </div>
        );
    }
}
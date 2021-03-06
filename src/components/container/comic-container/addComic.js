import React, { Component } from 'react';

export default class AddComic extends Component {
    constructor(props) {
        super(props)

        this.state={
            title: "",
            author: "",
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title
        let author = this.state.author
       

        fetch("https://hell-creek-music-website.herokuapp.com/container/comic-container/and-more/comic-books/input",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, author})
        })
        .then(response => {return response.json();
        })
        .then(responseData => {return responseData}
        )
        .then(() =>{this.props.history.push('/addedLanding')})
        .catch(err => {
            console.log("Fetch error", err)
        })

    }

       
    render() {
        return (
            <div style={{padding:"10px"}}>
                <h1 className="add-a-book" style={{textAlign:"center"}}>Add a Book Below</h1> 
                {console.log("state", this.state)}
                
                <form onSubmit = {this.handleSubmit}>
                    <div className="add-title" style={{textAlign:"center", paddingBottom:"10px"}}>
                        <label>Title:</label>
                            <input
                                type="text"
                                name = "title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                />
                    </div>

                    <div className="add-author" style={{textAlign:"center", paddingBottom:"10px"}}>
                        <label>Author:</label>
                        <input
                            type="text"
                            name = "author"
                            value={this.state.author}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                    <div className="submit" style={{textAlign:"center", paddingBottom:'100px'}}>
                      
                       <button className="added-comic-button"
                        type="submit" 
                        value="submit"
                        >Submit</button>
                       
                    </div>
                        
                </form>
            </div>
        );
    }
} 

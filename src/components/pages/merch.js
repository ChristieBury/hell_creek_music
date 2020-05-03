import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom"
import axios from 'axios';
import { Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


 
export default class Merch extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         clicked :false
    //     }
        

    //     this.imageClick=this.imageClick.bind(this);

    // imageClick = () => {
    //     console.log('clicked!')
    //     this.setState({
    //         clicked:true
    //     })
    //     .catch(error => {
    //         console.log("error in imageClick", error)
    //     })
    // }
    // componentDidMount() {
    //     axios.get('')
    // }

    
    
       
    
    render() {
        return (
            
            <div className="merch-wrapper">
        {/* <CloudinaryContext
            imageClick = {this.imageClick}/> */}
            <div>
          
            </div>
                <h1>Merchandise</h1>
            <Link to="/merch"></Link>
            </div>
        );
    }
}
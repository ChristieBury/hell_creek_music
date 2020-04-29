import React, { Component } from 'react';
import { Link } from "react-router-dom";


import Image1 from '../../../static/assets/images/autograph-img_Moment.jpg';
import Image2 from '../../../static/assets/images/michael-angelo-batio-4burys-img_Moment.jpg';
import Image3 from '../../../static/assets/images/mab-vs-trex_Moment.jpg';
import Image4 from '../../../static/assets/images/carmine-vinny-burys_Moment.jpg';
import Image5 from '../../../static/assets/images/vinny-master-class-img_Moment.jpg';
import Image6 from '../../../static/assets/images/steve-david-reece_Moment.jpg';
import Image7 from '../../../static/assets/images/elliott-craig-john_Moment.jpg';
import Image8 from '../../../static/assets/images/craig-goldy-trex_Moment.jpg';
import Image9 from '../../../static/assets/images/elliott-rubinson_Moment.jpg';
import Image10 from '../../../static/assets/images/ron-thal-trex_Moment.jpg';
import Image11 from '../../../static/assets/images/cj-trex_Moment.jpg';
import Image12 from '../../../static/assets/images/shawn-drover-t-rex-img_Moment.jpg';
import Image13 from '../../../static/assets/images/john-corabi-img_Moment.jpg';
import Image14 from '../../../static/assets/images/john-corabi-img2_Moment.jpg';
 



 
export default class Artists extends Component {
    constructor() {
        super();

        this.state = {
            status: true
        }

        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)

        this.state = {
            index: 0,
            imgList:[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14]
        }
    }

    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length){
            this.setState({
                index:0
            })
        } else{
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    onClickBack() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length -1
            })
        } else {
            this.setState({
                index: this.state.index -1
            })
        }
    }

    
    render() {
        
        return (
            <div>
                <Link to ='/artists'></Link>
                <h1 className='artist-name'>Artists</h1>

                <div className='carousel-container'>

                    <div className='carousel-img-wrapper'>
                        <img className='carousel' src={this.state.imgList[this.state.index]} alt='artists photos'/><br />
                    </div>

                        <div className='back-button-wrapper'>
                            <button className='back-button'onClick={this.onClickBack}>Back</button>
                        </div>

                        <div className='forward-button-wrapper'>
                            <button className='forward-button' onClick={this.onClickForward}
                            >Forward</button>
                        </div>
                   
                
                </div>

            </div>
            
        );
    }
}
 


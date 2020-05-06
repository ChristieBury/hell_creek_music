import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Image, Transformation, } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';


 
export default class Merch extends Component {
   
    render() {
        const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'dtvihirqh'});
        return (
            
            <div className="vendor-wrapper-container">

                <div className="merch-title-wrapper">
                    <h1 className="s1">Quality products from trusted vendors.</h1>
                    <h1 className="s2"> Click the logo link.</h1>
                    <h1 className="s3">From beginner to advanced we have it all!</h1> 
                    <h1 className="s4">Stop by to check out our gear!</h1>
                </div>

                <div className="vendor-image-url-links">

                    <div className="drum-wrapper"> 
                        <div className="item-name">
                            DRUMS
                        </div>

                        <a href={cloudinaryCore.url("https://www.ddrum.com/")} className="ddrum">
                            <Image publicId="hell-creek-music-website/images-onclick-url/ddrum_cb7i4t.jpg" 
                            cloud_name='dtvihirqh' >
                                <Transformation quality="auto" fetchFormat="auto"/>
                            </Image>
                        </a>

                        <a href={cloudinaryCore.url("https://usa.yamaha.com/")} className="yamaha" >
                            <Image publicId="hell-creek-music-website/images-onclick-url/1yamaha_kw1j6k.jpg" cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>  
                        </a>
                    </div>

                    <div className='guitar-wrapper'>
                        <div className="item-name">
                            GUITARS
                        </div>

                        <a href={cloudinaryCore.url("https://amahiukuleles.com/")} 
                        className="amahi">
                            <Image publicId="hell-creek-music-website/images-onclick-url/amahi-horizontal-color_egyzrv.png" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" fetchFormat="auto" />
                            </Image>
                        </a>
                        <a href={cloudinaryCore.url("https://www.daisyrock.com/collections/guitars")} className="daisy-rock-guitars">
                            <Image publicId="hell-creek-music-website/images-onclick-url/Daisy_Rock_c6phok.jpg"
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" fetchFormat="auto" />
                            </Image>
                        </a>

                        <a href={cloudinaryCore.url("https://www.deanguitars.com/")}
                        className="dean-guitars">
                            <Image publicId="hell-creek-music-website/images-onclick-url/deandf-1_t6wxnd.jpg" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>
                        </a>

                        <a href={cloudinaryCore.url("https://www.michaelkellyguitars.com/en/")} className="michael-kelly">
                            <Image publicId="hell-creek-music-website/images-onclick-url/Michael_Kelly_lwsnts.jpg" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" fetchFormat="auto" />
                            </Image> 
                        </a>

                        <a href={cloudinaryCore.url("https://usa.yamaha.com/")} className="yamaha" >
                            <Image publicId="hell-creek-music-website/images-onclick-url/1yamaha_kw1j6k.jpg" cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>  
                        </a>

                        <a href={cloudinaryCore.url("https://www.epiphone.com/")} className="epiphone">
                            <Image publicId="hell-creek-music-website/images-onclick-url/epiphone_z8ky5b.jpg" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>
                        </a>

                        <a href={cloudinaryCore.url('https://www.lunaguitars.com/')} className="luna-guitars">
                            <Image publicId="hell-creek-music-website/images-onclick-url/luna_x0rzdo.jpg" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" fetchFormat="auto" />
                            </Image>  
                        </a>

                        <a href={cloudinaryCore.url("https://www.schecterguitars.com/")} className="schecter">
                            <Image publicId="hell-creek-music-website/images-onclick-url/schecter-guitar_enh2na.jpg" 
                            cloud_name='dtvihirqh'>
                                <Transformation color="#db0b0b" page="1" quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>
                        </a>
                    </div>

                    <div className="amp-wrapper">
                        <div className="item-name">
                            AMPS
                        </div>

                        <a href={cloudinaryCore.url("https://www.laney.co.uk/")} className="laney">
                            <Image publicId="hell-creek-music-website/images-onclick-url/Laney_crhlmj.png"
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="fill" fetchFormat="auto" />
                            </Image>  
                        </a>
                        <a href={cloudinaryCore.url("https://usa.yamaha.com/")} className="yamaha" >
                            <Image publicId="hell-creek-music-website/images-onclick-url/1yamaha_kw1j6k.jpg" cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>  
                        </a>
                    </div>

                    <div className="accessories-wrapper">
                        <div className="item-name">
                            ACCESSORIES
                        </div>

                        <a href={cloudinaryCore.url("https://www.drstrings.com/")} className="drStrings">
                            <Image publicId="hell-creek-music-website/images-onclick-url/images_f3mi5n.jpg" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" fetchFormat="auto" />
                            </Image>
                        </a>

                        <a href={cloudinaryCore.url("https://vicfirth.zildjian.com/")} className="vic-firth">
                            <Image publicId="hell-creek-music-website/images-onclick-url/vic_firth_nbpqpg.png" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="fill" fetchFormat="auto" />
                            </Image>
                        </a>

                        <a href={cloudinaryCore.url("https://www.aquariandrumheads.com/")} className="aquarian-drum-heads">
                            <Image publicId="hell-creek-music-website/images-onclick-url/logo_u0isoy.bmp" 
                            cloud_name='dtvihirqh'>
                                <Transformation quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>
                        </a>
                    </div>

                </div>
                        <div className="rent-me">
                        RENT DIRECTLY ON-LINE!
                        </div>
                    <div className="rental-instruments">
                        <a href={cloudinaryCore.url("https://www.rentfromhome.com/")} className="vir-wrapper">
                            <Image publicId="hell-creek-music-website/images-onclick-url/vir_kdusee.jpg" 
                            cloud_name='dtvihirqh'className="vir-instrument-logo1">
                                <Transformation quality="auto" width="300" crop="scale" fetchFormat="auto" />
                            </Image>

                            <Image publicId="hell-creek-music-website/images-onclick-url/vir-one-month-free_xmf2i9.gif" 
                            cloud_name='dtvihirqh'className="vir-instrument-logo2">
                                <Transformation quality="auto" height="155" crop="scale" fetchFormat="auto" />
                            </Image>
                        </a>
                            
                    </div>
                            <div className="rent-me">
                            secret code word...
                            </div> 
                            <div className='creek'>'creek'</div>
                            <div className="rent-me">for a free month!</div> 
          
                <Link to="/merch"></Link>
            </div>
        );
    }
}
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Webfont from 'webfontloader';

import { SocialIcon } from 'react-social-icons';
import ReactContainer from "./container/nav-container";
import Home from "./pages/home";
import Artists from "./pages/artists";
import Merch from "./pages/merch";
import Contact from "./pages/contact";
import AndMore from "./container/comic-container/and-more";
import Icons from "../helpers/icons-fonts";
import Favicon from'react-favicon';
import HellCreekLogo from "../../static/assets/images/hell-creek-logo.jpg"




export default class App extends Component {
  constructor() {
    super();

    Icons();
  }
  render() {
    return (
      <div className='app'>
        <div className="hellCreekLogo">
        <img src={HellCreekLogo} alt='Hell Creek Music & More'/>
        </div>
        <Router>
          <div>
            <ReactContainer/>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/artists" component={Artists}/>
              <Route path="/merch" component={Merch}/>
              <Route path="/container/comic-container/and-more" component={AndMore}/>
              <Route path="/contact" component={Contact}/>

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

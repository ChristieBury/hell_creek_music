import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ReactContainer from "./container/nav-container";
import Home from "./pages/home";
import Artists from "./pages/artists";
import Merch from "./pages/merch";
import Contact from "./pages/contact";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="music-store-wrapper">
          <h1>Hell Creek Music & More</h1>
        </div>
        <Router>
          <div>
            <ReactContainer/>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/artists" component={Artists}/>
              <Route path="/merch" component={Merch}/>
              <Route path="/contact" component={Contact}/>

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

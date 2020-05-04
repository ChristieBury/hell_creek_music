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
import AndMore from "./container/comic-container/and-more";
import Icons from "../helpers/icons-fonts";
import HellCreekLogo from "../../static/assets/images/hell-creek-logo.jpg";
import ViewBook from "./container/comic-container/viewComic";
import AddComic from './container/comic-container/addComic';
import DeletedLanding from './container/comic-container/deleteLanding';
import AddedLanding from "./container/comic-container/addedLanding";

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
              <Route exact path="/view_book/:id" component={ViewBook}/>
              <Route path="/add_book" component={AddComic}/>
              <Route path="/addedLanding" component={AddedLanding}/>
              <Route path="/deleted_book" component={DeletedLanding}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

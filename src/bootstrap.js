import React from "react";
import ReactDOM from "react-dom";
import Favicon from 'react-favicon';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
// import ViewBook from "./components/and-more"


const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
    
  );
}

document.addEventListener("DOMContentLoaded", main);

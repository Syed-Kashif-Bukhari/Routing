import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import './index.css';
import { Router, Route, browserHistory, Link, IndexRoute } from "react-router";
// import {About} from "./components/About";
// import { App } from "./components/App";

const About = (props) => (
  <div>
    <h1>About component</h1>
    <div>{props.children}</div>
    <Link activeClassName="active" to="/about/city">Sport</Link><br />
    <Link activeClassName="active"  to="/about/sport">City</Link><br />
  

  </div>

);
const App = () => (
  <div>
    <h1>App component</h1>
    
    <Link to="/about">About</Link>

  </div>
);
const CityImage= ()=> (

      
      <img src="./1.jpg" alt="" />
      
  
);

const SportImage= ()=> (

      
      <img src="./2.jpg" alt="" />
      
  
);
const AboutIndex =()=>(
  <div>About Index</div>
);

ReactDOM.render(
      <Router history={browserHistory}>
          <Route path="/" component={App} />
          <Route path="/about" component={About} >
          <IndexRoute component={AboutIndex} />
              <Route path="city" component={CityImage} />
              <Route path="sport" component={SportImage} />
          
          </Route>
      
      </Router>
   ,
  document.getElementById('root')
);

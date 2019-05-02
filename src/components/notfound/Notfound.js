import React, { Component } from 'react'
import { Route, Link, BrowserRouter  as Router, Switch } from 'react-router-dom';

import './Notfound.css';
export class Notfound extends Component {
  
  render() {
    
    return (
      <div>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops!</h1>
            </div>
            <h2>404 - Page not found</h2>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to="/"> <button className="def-shad btn-back-dark">Go To Homepage</button> </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Notfound

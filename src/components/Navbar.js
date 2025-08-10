import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand d-flix align-items-center" to="/">
             <img 
                src="/logo.png.png"   // Public folder path
                alt="NewsFlix Logo" 
                style={{ height: "35px", marginRight: "8px", backgroundColor:"#7D8D86"}}
              />
              NewsFlix
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Technology">Technology</Link>
                </li>
              </ul>
              <div className={`form-check form-switch text-${this.props.mode === 'light'?'dark':'light'}`} >
                <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault">Enable {this.props.mode === 'light'?'dark':'light'} Mode</label>
            </div>
              
            </div>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

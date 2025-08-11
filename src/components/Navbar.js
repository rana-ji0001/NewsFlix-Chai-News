import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`  } style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }} >
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
              <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} Mode</label>
            </div>
              
            </div>

          </div>
        </nav>
      </div>
    );
}

export default Navbar;


import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';


export default class App extends Component {
  pageSize = 10;
  constructor() {
    super();
    this.state = {
      mode: 'light' // default theme
    };
  }
  
  toggleMode = () => {
    this.setState(prevState => {
      const newMode = prevState.mode === 'light' ? 'dark' : 'light';
      document.body.className = `bg-${newMode}`; // update body bg
      return { mode: newMode };
    });
  };
  render() {
    return (
      <div>
        <Router>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
        
         <Routes>
            <Route path="/" element={<News key="home" pageSize={this.pageSize} country="us" mode={this.state.mode} category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="us" mode={this.state.mode} category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" mode={this.state.mode} category="entertainment" />} />
            <Route path="/general" element={<News key="general" country="us" pageSize={this.pageSize} mode={this.state.mode} category="general" />} />
            <Route path="/health" element={<News key="health" country="us" pageSize={this.pageSize} mode={this.state.mode} category="health" />} />
            <Route path="/science" element={<News key="science" country="us" pageSize={this.pageSize} mode={this.state.mode} category="science" />} />
            <Route path="/sports" element={<News key="sports" country="us" pageSize={this.pageSize} mode={this.state.mode} category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} mode={this.state.mode} country="us" category="technology" />} />
        </Routes>
        </Router> 
      </div>
    )
  }
}


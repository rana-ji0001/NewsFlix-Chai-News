
import './App.css';


import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
 import LoadingBar from "react-top-loading-bar";


const App = () => {
  const pageSize = 10;
const [mode, setMode] = useState('light');
const [progress, setProgress] = useState(0);
  
  const toggleMode = () => {
      const newMode = mode === 'light' ? 'dark' : 'light';
      setMode(newMode);
      document.body.className = `bg-${newMode}`; // update body bg
  };
    return (
      <div>
        <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
      />
        
         <Routes>
            <Route path="/" element={<News setProgress = {setProgress}   key="home" pageSize={pageSize} country="us" mode={mode} category="general" />} />
            <Route path="/business" element={<News setProgress = {setProgress}   key="business" pageSize={pageSize} country="us" mode={mode} category="business" />} />
            <Route path="/entertainment" element={<News setProgress = {setProgress}   key="entertainment" pageSize={pageSize} country="us" mode={mode} category="entertainment" />} />
            <Route path="/general" element={<News setProgress = {setProgress}   key="general" country="us" pageSize={pageSize} mode={mode} category="general" />} />
            <Route path="/health" element={<News setProgress = {setProgress}   key="health" country="us" pageSize={pageSize} mode={mode} category="health" />} />
            <Route path="/science" element={<News setProgress = {setProgress}   key="science" country="us" pageSize={pageSize} mode={mode} category="science" />} />
            <Route path="/sports" element={<News setProgress = {setProgress}   key="sports" country="us" pageSize={pageSize} mode={mode} category="sports" />} />
            <Route path="/technology" element={<News setProgress = {setProgress}   key="technology" pageSize={pageSize} mode={mode} country="us" category="technology" />} />
        </Routes>
        </Router> 
      </div>
    )
}
export default App;


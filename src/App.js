import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
const App = () =>  {
  
 let [progress,setProgress] =useState(0);
 
  return (
    <div>
      <Router>
        <NavBar/>
        <LoadingBar color="#f11946" progress={progress}  />
        <Routes>
          <Route  path="/" element={<News setProgress={setProgress} key="general" pageSize={20} country='in' category='general' />} />
          <Route  path="/Business" element={<News setProgress={setProgress}  key="business" pageSize={20} country='in' category='business' />} />
          <Route  path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={20} country='in' category='entertainment' />} />
          <Route  path="/general" element={<News setProgress={setProgress}  key="general" pageSize={20} country='in' category='general' /> }/>
          <Route  path="/health" element={<News setProgress={setProgress}  key="health" pageSize={20} country='in' category='health' /> }/>
          <Route  path="/science" element={<News setProgress={setProgress}  key="science" pageSize={20} country='in' category='science' /> }/>
          <Route  path="/sport" element={<News setProgress={setProgress}  key="sport" pageSize={20} country='in' category='sport' /> }/>
          <Route  path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={20} country='in' category='technology' /> }/>
        </Routes>
      </Router>
    </div>
  );

}

export default App;

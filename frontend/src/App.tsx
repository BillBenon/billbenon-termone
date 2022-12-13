import React from 'react';
import './App.css';
import DoMathOperation from './pages/DoMathOperation';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/do-math' element={<DoMathOperation/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

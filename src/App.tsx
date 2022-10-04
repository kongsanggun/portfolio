import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './pages/main'
import Project1 from "./pages/project1";
import Project2 from "./pages/project2";
import Project3 from "./pages/project3";
import Error from "./pages/error";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

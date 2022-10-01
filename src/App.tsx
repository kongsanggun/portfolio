import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './pages/main'
import Error from "./pages/error";

import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

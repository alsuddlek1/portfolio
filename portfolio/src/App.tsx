import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Nav from './components/nav';
import Project from './pages/project';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/portfolio" element={<Main />} />
        <Route path="/portfolio/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

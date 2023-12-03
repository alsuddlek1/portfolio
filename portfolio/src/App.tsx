import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Nav from './components/nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/portfolio" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;

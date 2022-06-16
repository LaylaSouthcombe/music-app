import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar, Footer } from './layout';
import { Home, PostMalone, GlassAnimals, Curate, NotFound } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="postmalone" element={<PostMalone />}/>
          <Route path="glassanimals" element={<GlassAnimals />}/>
          <Route path="curate" element={<Curate/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

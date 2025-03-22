import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutPage from './pages/About';
import Portfolio from './pages/Portfolio';
import AlbumPage from './components/AlbumPage/AlbumPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="photography-puce-eta.vercel.app/album/:id" element={<AlbumPage />} />
        <Route path="photography-puce-eta.vercel.app/portfolio" element={<Portfolio />} />
        <Route path="photography-puce-eta.vercel.app/contact" element={<Contact />} />
        <Route path="photography-puce-eta.vercel.app/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;

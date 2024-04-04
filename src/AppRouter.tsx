import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurDogs from './pages/OurDogs';
import Puppies from './pages/Puppies';
import Results from './pages/Results';
import LatestPosts from './pages/LatestPosts';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 overflow-auto"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-dogs" element={<OurDogs />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/results" element={<Results />} />
          <Route path="/latest-posts" element={<LatestPosts />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ArtistDetailPage from './components/artist/ArtistDetailPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ArtistDetailPage />} />
          <Route path="/:artist_uuid" element={<ArtistDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

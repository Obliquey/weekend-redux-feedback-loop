import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

// components
import Feeling from '../Feedback/Feeling';
import Comments from '../Feedback/Comments';
import Support from '../Feedback/Support';
import Understanding from '../Feedback/Understanding';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Routes>
        <Route path="/" element={<Feeling />} />
        <Route path="/support" element={<Support />} />
        <Route path="/understanding" element={<Understanding />} />
        <Route path="/comments" element={<Comments />} />

      </Routes>

      <footer>
        <h2>Thank you for taking time to fill this out!</h2>
      </footer>
    </div>
  );
}

export default App;

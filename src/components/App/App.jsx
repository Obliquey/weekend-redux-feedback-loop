import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import TableRowsIcon from '@mui/icons-material/TableRows';


// components
import Feeling from '../Feedback/Feeling';
import Comments from '../Feedback/Comments';
import Support from '../Feedback/Support';
import Understanding from '../Feedback/Understanding';
import Review from '../Review+Thanks/Review';
import Thanks from '../Review+Thanks/Thanks';
import Admin from '../Admin/Admin';


function App() {
  const navigate = useNavigate();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <div className='place-items-end'>
          <Button
              size="small"
              startIcon={<TableRowsIcon />}
              onClick={() => navigate('../admin')}
              >ADMIN PAGE</Button>
        </div>
      </header>
      <main className='flex flex-col min-h-screen'>
        <Routes>
          <Route path="/" element={<Feeling />} />
          <Route path="/understanding" element={<Understanding />} />
          <Route path="/support" element={<Support />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/review" element={<Review />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <footer className='object-bottom'>
        <h2 className='mt-6 text-4xl'>Thank you for taking time to fill this out!</h2>
      </footer>
    </div>
  );
}

export default App;

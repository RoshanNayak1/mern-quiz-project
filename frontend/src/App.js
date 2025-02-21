import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';

const App = () => (
  <div className='app-container'>
    <Router>
        <Routes>
            <Route path="/" element={<Quiz />} />
        </Routes>
    </Router>
    </div>
);

export default App;

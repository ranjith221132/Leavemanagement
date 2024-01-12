// App.jsx
import React from 'react';
import './App.css';
import MiniDrawer from './layout/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Apply from './pages/Apply';
import Form from './pages/Form';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MiniDrawer />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

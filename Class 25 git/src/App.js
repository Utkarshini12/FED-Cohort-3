import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import { Suspense } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div className='loader'>Loading</div>}>
            <Login />
          </Suspense>
        
        } />
      </Routes>
    </Router>
    
  );
}

export default App;

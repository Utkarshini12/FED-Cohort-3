import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home'
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



// git add . - add all files
// git commit -m "message"
// git push origin 
// git status - check status 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div className='loader'>Loading</div>}>
            <Login />
          </Suspense>
        
        } />
         <Route path="/home" element={
          <Suspense fallback={<div className='loader'>Loading</div>}>
            <Home />
          </Suspense>
        
        } />
      </Routes>
    </Router>
    
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Suspense } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
             <Login />
          </Suspense>
        } />
        <Route exact path="/home" element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
             <Home />
          </Suspense>
        } />
         <Route exact path="/products" element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
             <Product />
          </Suspense>
        } />
         <Route exact path="/cart" element={
          <Suspense fallback={<div className='loader'>Loading...</div>}>
             <Cart />
          </Suspense>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;

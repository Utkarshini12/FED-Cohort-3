import {Routes, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home'
import {Suspense} from 'react'

function App() {
  return(
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/about" element={<About />} />
    
    </Routes>
    </Suspense>
    </>
  )
}

export default App;
import {Routes, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home'
// import {Suspense} from 'react'

function App() {
  return(
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>


    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Route path="/about" element={<About />} />
      {/* </Suspense> */}


    </Routes>
    </>
  )
}

export default App;
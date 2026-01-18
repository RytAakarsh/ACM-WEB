import { useState } from 'react'
import Events from './pages/Events'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Resources from './pages/Resources'
import JoinUs from "./pages/joinUs";

// import JoinUs from './pages/joinUs'
import Team from "./pages/Team";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/events' element={<Events />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/team' element={<Team />} />
      <Route path='/resources' element={<Resources />} />
       <Route path='/joinus' element={<JoinUs />} /> 
    </Routes>
    
  )
}

export default App

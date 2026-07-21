import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Men from './pages/Men';
import Women from './pages/Women';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />}>
          <Route index element={<Men />} />
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
        </Route>

        <Route path='*' element={<Error/> } />
      </Routes>
    </div>
  )
}

export default App
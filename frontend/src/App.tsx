import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CardSearch from './pages/CardSearch'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards/search' element={<CardSearch />} />
      </Routes>
    </div>
  )
}

export default App
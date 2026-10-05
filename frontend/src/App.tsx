import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CardSearch from './pages/CardSearch'
import Card from './pages/Card'
import Marketplace from './pages/Marketplace'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cards/:cardId' element={<Card />} /> 
        <Route path='/cards/search' element={<CardSearch />} />
        <Route path='/cards/marketplace' element={<Marketplace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
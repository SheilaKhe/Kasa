import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../src/utils/style/style.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Rental from './pages/Rentals'
import Footer from './components/Footer'
import About from './pages/About'
import Error from './pages/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rental/:id" element={<Rental />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

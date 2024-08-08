import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/uicomponents/Login'
import Regester from './components/uicomponents/Regester'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/regester" element={<Regester />} />

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
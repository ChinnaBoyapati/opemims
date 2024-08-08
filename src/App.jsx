import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/uicomponents/Login'
import Regester from './components/uicomponents/Regester'
import ForgetPassword from './components/uicomponents/ForgetPassword'
import Navbar from './components/uicomponents/Navbar'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/regester" element={<Regester />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/home" element={<Navbar />} />
          <Routes>
            <Route path='/Navbar' element={<Navbar />} />
          </Routes>

        </Routes>
      </BrowserRouter> */}
      hello

    </div>
  )
}

export default App
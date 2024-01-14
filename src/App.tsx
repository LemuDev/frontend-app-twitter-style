import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import { ProtectedRoutes } from './components/ProtectedRoutes'

import {getToken} from './services/token'
import { useEffect, useState } from 'react'
import { Register } from './pages/Register'



function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    setToken(getToken())
  }, [])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        {/* Privates Routes */}
        <Route path='/' element = { 
            <ProtectedRoutes token={token }> 
              <Home/> 
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import { ProtectedRoutes } from './components/ProtectedRoutes'

import { Register } from './pages/Register'



function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        {/* Privates Routes */}
        <Route path='/' element = { 
            <ProtectedRoutes> 
              <Home/> 
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

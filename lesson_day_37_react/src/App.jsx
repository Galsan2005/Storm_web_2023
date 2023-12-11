import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pages from './components/Pages'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Pages title={'Home'} />} />
        <Route path='/about' element={<Pages title={'About'} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App

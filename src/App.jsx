import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Vegetables from './Pages/Vegetables'
import Coming_soon from './pages/Coming_soon'
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Vegitables' element={<Vegetables/>}/>
      <Route path='/Comingsoon' element={<Coming_soon/>}/>
    </Routes>
    
    </>
  )
}

export default App

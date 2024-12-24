
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Dashboard } from './Pages/Dashboard'
import { Products } from './Pages/Products'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/product' element={<Products/>}/>
  <Route path='signup' element={<SignUp/>}/>
  <Route path='signin' element={<SignIn/>}/>
</Routes>
<Footer/>
</BrowserRouter>
  )
}

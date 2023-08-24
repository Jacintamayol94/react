
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Notfound from './components/Notfound'
import Product from './components/Product'
import Frutas from './components/Frutas'
import FrutasFuncion from './components/FrutasFuncion'
import RickyMorty from './components/RickyMorty'
import RickyMortyFn from './components/RickyMortyFn'
import UserList from './components/UserList'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products/1">Products</Link>
          </li>
          <li>
            <Link to="/frutas">Frutas</Link>
          </li>
          <li>
            <Link to="/frutasfuncion">Frutas Función</Link>
          </li>
          <li>
            <Link to="/rickymorty">Rick & Morty</Link>
          </li>
          <li>
            <Link to="/rickymortyfn">Rick & Morty Función</Link>
          </li>
          <li>
            <Link to="/userlist">User List</Link>
          </li>
          <li>
            <Link to="/no-existe">No existe</Link>
          </li>
        </ul>
      </nav>

      <hr/>

    <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/frutas" element={<Frutas />} />
        <Route path="/frutasfuncion" element={<FrutasFuncion />} />
        <Route path="/rickymorty" element={<RickyMorty />} />
        <Route path="/rickymortyfn" element={<RickyMortyFn />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="*" element={<Notfound />} />
        

    </Routes>

    </>
  )
}

export default App

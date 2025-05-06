import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from "react-router-dom"

import NavBar from "./components/NavBar"

import { Container } from "react-bootstrap"

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default App

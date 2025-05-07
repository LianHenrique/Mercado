import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from "react-router-dom"

import NavBar from "./components/NavBar"

import { Container } from "react-bootstrap"
import { AuthProvider } from './contexts/UserContext';

function App() {
  return (
    <>
      <AuthProvider>
        <div className='app'>
          <NavBar />
          <Container>
            <Outlet />
          </Container>
        </div>
      </AuthProvider>
    </>
  )
}

export default App

import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router"
import { useContext } from "react"
import { Container } from "react-bootstrap"

import Formulario from "../../components/Formulario"

import { Container } from "react-bootstrap"

import Formulario from "../../components/Formulario"

const Cadastro = () => {

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
<<<<<<< HEAD
    <div style={{height:"90.5vh"}}>
        <Container>
          <h1>Cadastrar produtos</h1>
          <Formulario page="cadastrar" />
        </Container>
=======
    <div>
      <div style={{ height: "91.8vh" }}>
        <Container>
          <h1>Cadastrar Produto</h1>
          <Formulario page="cadastrar" />
        </Container>
      </div>
>>>>>>> bd705921f1b5ee0ff1bec6a6901a4828981a5d99
    </div>
  )
}

export default Cadastro
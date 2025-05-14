import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router"
import { useContext } from "react"

import { Container } from "react-bootstrap"

import Formulario from "../../components/Formulario"

const Cadastro = () => {

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div style={{height:"90.5vh"}}>
        <Container>
          <h1>Cadastrar produtos</h1>
          <Formulario page="cadastrar" />
        </Container>
    </div>
  )
}

export default Cadastro
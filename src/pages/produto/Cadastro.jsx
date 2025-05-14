import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router"
import { useContext } from "react"
import { Container } from "react-bootstrap"

import Formulario from "../../components/Formulario"

const Cadastro = () => {

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div>
      <div style={{ height: "91.8vh" }}>
        <Container>
          <h1>Cadastrar Produto</h1>
          <Formulario page="cadastrar" />
        </Container>
      </div>
    </div>
  )
}

export default Cadastro
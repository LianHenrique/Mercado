import { useContext } from "react"
import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router"
import { Container } from "react-bootstrap"
import Formulario from "../../components/Formulario"

const Edit = () => {

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div>
      <div style={{height:"100%"}}>
        <Container>
          <h1>Editar produtos</h1>
          <Formulario page="editar" />
        </Container>
      </div>
    </div>
  )
}

export default Edit
import { useContext } from "react"
import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router"
import { Container } from "react-bootstrap"
<<<<<<< HEAD
=======

>>>>>>> bd705921f1b5ee0ff1bec6a6901a4828981a5d99
import Formulario from "../../components/Formulario"

const Edit = () => {

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div>
<<<<<<< HEAD
      <div style={{height:"100%"}}>
        <Container>
          <h1>Editar produtos</h1>
          <Formulario page="editar" />
=======
      <div style={{height:"91.8vh"}}>
        <Container>
          <h1>Editar Produto</h1>
          <Formulario page="editar"/>
>>>>>>> bd705921f1b5ee0ff1bec6a6901a4828981a5d99
        </Container>
      </div>
    </div>
  )
}

export default Edit
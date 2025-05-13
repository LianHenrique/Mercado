import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router"
import { useContext } from "react"

const Cadastro = () => {

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div>
        
    </div>
  )
}

export default Cadastro
import { useContext } from "react"
import { AuthContext } from "../../contexts/UserContext"
import { Navigate } from "react-router"

const Edit = () => {

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div>
        
    </div>
  )
}

export default Edit
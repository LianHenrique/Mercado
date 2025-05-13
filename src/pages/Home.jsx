import { useContext } from "react"
import Produto from "../components/cards/Produto"

import { useListaProdutos } from "../hooks/useAPI"
import { AuthContext } from "../contexts/UserContext"
import { Navigate } from "react-router"

const Home = () => {
  const produtos = useListaProdutos()

  const { usuarioNome } = useContext(AuthContext)

  if(usuarioNome === "Visitante") return <Navigate to="/login" />

  return (
    <div>
      <h1>Lista</h1>
        <div className="d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap">
          {produtos.map( (prod) => (
            <Produto 
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
            />
          ))}
        </div>
    </div>
  )
}

export default Home
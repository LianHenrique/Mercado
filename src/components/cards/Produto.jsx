import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useDeleteProduto } from "../../hooks/useAPI"

const Produto = (props) => {

  const { deletarProduto } = useDeleteProduto()

  const handleDelete = async () => {

    const deletado = await deletarProduto(props.id)
    console.log()
    alert(`${deletado.nome} deletado`)
    window.location.reload()

  }

  return (
    <div style={{backgroundColor: "#e8ffec", height: "83.7vh"}}>
        <Card 
        style={{width: "15rem", height: "auto", margin: "10px", padding: "10px"}}>
          <Card.Img 
          variant="top"
          src={
            props.imagemUrl != "null" ?
            props.imagemUrl :
            "https://cdn-icons-png.flaticon.com/512/813/813789.png"
          }
           />
          <Card.Body>
            <Card.Title>{props.nome}</Card.Title>
            <Card.Subtitle>R$ {props.preco}</Card.Subtitle>
            <Card.Text>{props.descricao}</Card.Text>  
            <Card.Text>{props.categoria}</Card.Text>  
            <Card.Link href={`/edit-produto/${props.id}`}>
              <Button variant='warning'>Editar</Button>
            </Card.Link>
            <Card.Link>
              <Button variant='danger' type='button' onClick={handleDelete}>Remover</Button>
            </Card.Link>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Produto
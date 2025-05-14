import { useEffect, useState } from "react"
import { Button, Col, FloatingLabel, Form, Image, Row } from "react-bootstrap"

import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router"

import {
  useListaCategorias,
  useInserirProduto,
  useBuscarProdutoPorid,
  useAtualizaProduto
} from "../hooks/useAPI"

const Formulario = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const { inserirProduto } = useInserirProduto()
  const { buscarProdutoPorid } = useBuscarProdutoPorid()
  const { atualizaProduto } = useAtualizaProduto()

  const categorias = useListaCategorias()

  const {id} = useParams()

  const navigate = useNavigate()

  const linkImagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdssSl3-znyXhffS9Qy09SBO0B-kIfYFlJQ&s"

  const imagemAtual = watch("imagemUrl")

  if(props.page === "editar"){
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {

      async function fetchProduto() {
        try{
          const produto = await buscarProdutoPorid(id)

          if(produto && !carregado){
            reset({
              nome: produto.nome,
              descricao: produto.descricao,
              categoria: produto.categoria,
              preco: produto.preco,
              imagemUrl: produto.imagemUrl
            })
            setCarregado(true)
          }

        }
        catch(error){
          console.log(error)
          if(error.message.includes("Unexpected")){
            alert("Produto não encontrado")
            navigate("/home")
          }
        }
      }

      fetchProduto()

    },[])

  }

  const onSubmit = (data) => {
    console.log(data)
    if(props.page === "cadastrar"){
      inserirProduto(data)
    }
    else{
      atualizaProduto(data, id)
    }
    navigate("/home")
  }

  const onError = (errors) => {
    console.log(errors)
  }

  return (
    <div className="text-center">
    <Form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit, onError)}>
      <Row>
        <Col xs={6}>
          {/* Caixinha de nome */}
          <FloatingLabel
            controlId="floatingInputNome"
            label="Nome"
            className="mb-5"
          >
            <Form.Control
              type="text"
              placeholder="Digite o nome do produto"
              {...register("nome", {
                required: "O nome é obrigatório",
                minLength: {
                  value: 2,
                  message: "O nome deve ter pelo menos 2 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "O nome deve ter ate 20 caracteres",
                },
              })}
            />
            {errors.nome && <p className="error">{errors.nome.message}</p>}
          </FloatingLabel>
          {/* Caixinha de descrição */}
          <FloatingLabel
            controlId="floatingInputDescricao"
            label="Descrição"
            className="mb-5"
          >
            <Form.Control
              type="text"
              placeholder="Digite a descrição do produto"
              {...register("descricao", {
                required: "A descrição é obrigatória",
                minLength: {
                  value: 2,
                  message: "A descrição deve ter pelo menos 2 caracteres",
                },
                maxLength: {
                  value: 180,
                  message: "A descrição deve ter ate 180 caracteres",
                },
              })}
            />
            {errors.descricao && (
              <p className="error">{errors.descricao.message}</p>
            )}
          </FloatingLabel>
          {/* Select de categorias */}
          <FloatingLabel
            controlId="floatingSelectTipo"
            label="Tipo de produto"
            className="mb-5"
          >
            <Form.Select
              {...register("categoria", {
                validate: (value) =>
                  !value.includes("nenhum") || "Escolha uma categoria ",
              })}
            >
              <option value="nenhum"> Escolha uma categoria </option>
              {categorias.map((cat) => (
                <option
                  key={cat.id}
                  value={cat.nome}
                  selected={
                    props.page === "editar" && watch("categoria") === cat.nome
                  }
                >
                  {cat.nome}
                </option>
              ))}
            </Form.Select>
            {errors.categoria && (
              <p className="error">{errors.categoria.message}</p>
            )}
          </FloatingLabel>
          {/* Caixinha de preço */}
          <FloatingLabel
            controlId="floatingInputPreco"
            label="Preço"
            className="mb-5"
          >
            <Form.Control
              type="number"
              step="0.1"
              placeholder="Digite o preco"
              {...register("preco", {
                required: "O preco é obrigatório",
                min: {
                  value: 0.1,
                  message: "O preço deve ser maior que 0",
                },
              })}
            />
            {errors.preco && <p className="error">{errors.preco.message}</p>}
          </FloatingLabel>
        </Col>
        <Col xs={6}>
          <Form.Group controlId="formFileLg" className="mb-5">
            {/* Caixinha de imagem */}
            <FloatingLabel
              controlId="floatingInputImagem"
              label="Envie o link da imagem do produto"
              className="mb-5"
            >
              <Form.Control
                type="text"
                placeholder="Envie o link da imagem do produto"
                {...register("imagemUrl", {
                  required: "A imagem é obrigatória",
                  pattern: {
                    value: /^(http|https):\/\/[^ "]+$/,
                    message: "Insira um link válido",
                  },
                })}
              />
              {errors.imagemUrl && (
                <p className="error">{errors.imagemUrl.message}</p>
              )}
            </FloatingLabel>
            <Image
              src={imagemAtual == "" ? linkImagem : imagemAtual}
              rounded
              width={300}
              height={300}
            />
          </Form.Group>
        </Col>
      </Row>
      {/* Botão para enviar o formulário de cadastro de produto */}
      <Button variant="primary" size="lg" type="submit">
        {props.page === "editar" ? "Atualizar" : "Cadastrar"}
      </Button>
    </Form>
  </div>

  )
}

export default Formulario
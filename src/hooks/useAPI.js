const url = import.meta.env.VITE_API_URL

import { useState, useEffect, useContext } from "react"

import { AuthContext } from "../contexts/UserContext"

export function useVerificaLogin () {

    const [usuarios, setUsuarios] = useState([])

    const { login } = useContext(AuthContext)

    useEffect( () => {
        async function fetchData() {
            try{
                const req = await fetch(`${url}usuarios`)
                console.log(req)
                setUsuarios(await req.json())
            }
            catch(erro){
                console.log(erro.message)
            }
        }
        fetchData()
    }, [])

    const verificaLogin = (data) => {
        const userToFind = usuarios.find( (user) => {
            return user.email === data.email
        } );
        
        if(userToFind != undefined && userToFind.senha == data.senha){
            login(userToFind)
            console.log(userToFind.nome,"logado")
            return "Login bem sucedido"
        }
        else{
            console.log(userToFind)
            return "Usuario ou senha invalidos"
        }

    }

    return { verificaLogin };

}

export function useListaProdutos() {
    const [produtos, setProdutos] = useState([])

    useEffect( () => {
        async function fetchData() {
            try{
                const req = await fetch(`${url}produtos`)
                console.log(req)
                setProdutos(await req.json())
            }
            catch(erro){
                console.log(erro.message)
            }
        }
        fetchData()
    }, [])

    return produtos

}

export function useDeleteProduto() {
    const deletarProduto = async (idProd) => {
        const req = await fetch(`${url}produtos/${idProd}`, {
            method:"DELETE"
        })
        const res = await req.json();
        console.log("Produto deletado:", res)
        return res
    }
<<<<<<< HEAD
    return { deletarProduto }
}

export function useBuscarProdutoPorid(){
    
    const buscarProdutoPorid = async (idProduto) => {
        const req = await fetch(`${url}produtos/${idProduto}`)
        console.log("Produto:", req.json())
        return (await req.json())
    }
    return { buscarProdutoPorid }

}

export function useListaCategorias(){

    const [categorias, setCategorias] = useState([])
=======
    return {deletarProduto}
}

export function useBuscarProdutoPorId () {
    const buscarProdutoPorId = async (idProd) => {
        const req = await fetch(`${url}produtos/${idProd}`);
        const res = await req.json();
        console.log("Produto encontrado:", res);
        return res;
    }
    return { buscarProdutoPorId }
}

export function useListaCategorias() {
    const [ categorias, setCategorias ] = useState([])
>>>>>>> bd705921f1b5ee0ff1bec6a6901a4828981a5d99

    useEffect(() => {
        async function fetchData() {
            try{
                const req = await fetch(`${url}categorias`)
<<<<<<< HEAD
                setCategorias(await req.json())
            }
            catch(erros){
                console.log(erros.message)
=======
                const categoria = await req.json()
                console.log(categoria)
                setCategorias(categoria)
            }
            catch(erro){
                console.log(erro.message)
>>>>>>> bd705921f1b5ee0ff1bec6a6901a4828981a5d99
            }
        }
        fetchData()
    }, [])
    return categorias
}

export function useInserirProduto(){
    const inserirProduto = async (data) => {
<<<<<<< HEAD
        const req = await fetch (`${url}produtos`, {
            method: "POST",
            headers: {
                "Content-Type": "appçication/json"
            },
            body: JSON.stringify(data)
        })
        return (await req.json())
=======
        const req = await fetch(`${url}produtos`, {
            method: "POST",
            headers: {
                "Content-Type":  "application/json",
            },
            body: JSON.stringify(data),
        })
        const res = await req.json()
        console.log("Produto inserido:",res)
        return res
>>>>>>> bd705921f1b5ee0ff1bec6a6901a4828981a5d99
    }
    return { inserirProduto }
}

export function useAtualizaProduto(){
<<<<<<< HEAD
    const atualizaProduto = async (data, idProduto) => {
        const req = await fetch (`${url}produtos/${idProduto}`, {
            method: "PUT",
            headers: {
                "Content-Type": "appçication/json"
            },
            body: JSON.stringify(data)
        })
        return (await req.json())
=======
    const atualizaProduto = async (data, idProd) => {
        const req = await fetch(`${url}produtos/${idProd}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const res = await req.json()
        console.log("Produto atualizado:",res)
        return res
>>>>>>> bd705921f1b5ee0ff1bec6a6901a4828981a5d99
    }
    return { atualizaProduto }
}
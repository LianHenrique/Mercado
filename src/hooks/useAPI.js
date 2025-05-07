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
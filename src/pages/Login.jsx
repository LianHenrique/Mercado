
import { useEffect, useState } from "react";
import {FloatingLabel, Container, Form, Button, Alert} from "react-bootstrap";

import { useForm } from "react-hook-form"

import { BsBoxArrowInRight } from "react-icons/bs";

import { useVerificaLogin } from "../hooks/useAPI"

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Login = () => {

    const { logout } = useContext(AuthContext)

    useEffect(() => {
        logout()
    }, [])

    const { verificaLogin } = useVerificaLogin()

    const navigate = useNavigate()

    const { 
        register,
        handleSubmit, 
        formState: {errors}
        } = useForm()

    const onSubmit = (data) => {
        console.log(data);

        const respVerifica = verificaLogin(data)

        if(respVerifica == "Login bem sucedido"){
            navigate("/home")
        }
        else{
            setAlertClass("mb-5 mt-2")
            setAlertMenssage(respVerifica)
        }

    }

    const onError = (erros) => {
        console.log(erros)
    }

    const [alertClass, setAlertClass] = useState("mb-5 d-none")
    const [alertMenssage, setAlertMenssage] = useState("")

  return (
    <div>
        <Container 
        style={{height:"100vh"}} 
        className="justify-content-center align-content-center">
            <BsBoxArrowInRight style={{
                fontSize:"100px",
                color:"green",
                margin:"auto",
                width:"100%"
            }} />
            {/* Form do login */}
            <Form 
            onSubmit={handleSubmit(onSubmit, onError)} style={{width:"75%", margin:"auto", textAlign:"center"}}>
                
                <FloatingLabel 
                controlId="floatingInputEmail" 
                label="Email" 
                className="mb-5">

                    <Form.Control 

                    {
                        ... register("email", {
                        required: "Email obrigatorio",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Email invalido"
                    },
                        validate: (value) => value.includes("@") || "Email invalido"
                    })} 

                    type="email" 
                    placeholder="Email">

                    </Form.Control>

                    {
                    errors.email && 
                    <p className="error">
                        { errors.email.message }
                    </p>
                    }

                </FloatingLabel>

                <FloatingLabel 
                controlId="floatingInputSenha" 
                label="Senha" 
                className="mb-5">

                    <Form.Control
                    {
                        ... register("senha", {
                            required: "Senha é obrigatoria"
                        })
                    } 
                    type="password" 
                    placeholder="Senha">

                    </Form.Control>
                    {
                        errors.senha && 
                        <p className="error">
                            { errors.senha.message }
                        </p>
                    }
                </FloatingLabel>

                <Button 
                variant="primary" 
                type="submit" 
                className="mb-5" 
                size="lg">
                    Entrar
                </Button>
                <Alert 
                variant="danger" 
                className={alertClass} 
                style={
                    {
                        position:"absolute", 
                        width:"30%", 
                        left:"35%", 
                        top:"75%"
                    }
                }> 
                {alertMenssage} 
                </Alert>
            </Form>
        </Container>
    </div>
  )
}

export default Login
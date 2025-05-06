
import {FloatingLabel, Container, Form, Button, Alert} from "react-bootstrap";

import { useForm } from "react-hook-form"

import { BsBoxArrowInRight } from "react-icons/bs";

const Login = () => {
  return (
    <div>
        <Container style={{height:"100vh"}} className="justify-content-center align-content-center">
            <BsBoxArrowInRight style={{
                fontSize:"100px",
                color:"green",
                margin:"auto",
                width:"100%"
            }} />
            {/* Form do login */}
            <Form style={{width:"75%", margin:"auto", textAlign:"center"}}>
                <FloatingLabel controlId="floatingInput" label="Email" className="mb-5">
                    <Form.Control type="email" placeholder="Email"></Form.Control>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Senha" className="mb-5">
                    <Form.Control type="password" placeholder="Senha"></Form.Control>
                </FloatingLabel>
                <Button variant="primary" type="submit" className="mb-5" size="lg">Entrar</Button>
                <Alert variant="danger" className="mb-5" style={{position:"absolute", wisth:"30%", left:"35%", top:"90%"}}> Sim </Alert>
            </Form>
        </Container>
    </div>
  )
}

export default Login
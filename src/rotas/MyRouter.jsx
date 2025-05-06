import { createBrowserRouter } from "react-router-dom"

import App from '../App'
import ErroPage from '../pages/ErroPage'
import Login from "../pages/Login"
import Home from "../pages/Home"
import Cadastro from "../pages/produto/Cadastro"
import Edit from "../pages/produto/Edit"

const MyRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<ErroPage />,
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/cadastro-produto",
                element:<Cadastro />
            },
            {
                path:"/edit-produto/:id",
                element:<Edit />
            },
        ]
    }
])

export default MyRouter
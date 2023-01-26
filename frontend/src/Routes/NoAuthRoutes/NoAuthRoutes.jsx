import { useRoutes } from 'react-router-dom'
import Login from "../../Pages/Login/Login"
import NotFound from "../../Pages/NotFound/NotFound"
import Register from "../../Pages/Register/Register"

function NoAuthRoutes() {
    const NoAuthRoutes=useRoutes([
        {
            index:true,
            element:<Login />
        },
        {
            path:"/register",
            element:<Register />
        },
        {
            path:"*",
            element:<NotFound login />
        }
    ])
    return NoAuthRoutes
}

export default NoAuthRoutes
import { useRoutes } from 'react-router-dom'
import Invalid from "../../Pages/Invalid/Invalid"
import NotFound from "../../Pages/NotFound/NotFound"
import { Navbar } from '../../Layouts/layouts'
function InvalidAuthRoutes() {
    const InvalidAuthRoutes=useRoutes([
        {
            index:true,
            element:
            <>
                <Navbar invalid /> 
                <Invalid />
            </>
        },
        {
            path:"*",
            element:<NotFound />
        },
    ])
    return InvalidAuthRoutes

}

export default InvalidAuthRoutes
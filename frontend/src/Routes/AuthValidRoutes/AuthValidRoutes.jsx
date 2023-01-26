import { useRoutes } from 'react-router-dom'
import Home from "../../Pages/Home/Home"
import NotFound from "../../Pages/NotFound/NotFound"
import RegistreActes from '../../Pages/Status/RegistreActes';
import Create from '../../Pages/Create/Create';
import { Navbar } from '../../Layouts/layouts'
import { STATUS } from '../../Pages/Status/Types/StatusTypes';
import { CREATE_TYPES } from '../../Pages/Create/Types/CreateTypes';
import Profile from '../../Pages/Profile/Profile';

const {
    NAISSANCE,
    DECES,
    MARIAGE
}=STATUS;

const {
    ACTE,
    REGISTRE,

}=CREATE_TYPES
function AuthValidRoutes() {
    const Registres=[
        {category:"naissance",to:"Registre_Naissances",type:NAISSANCE},
        {category:"deces",to:"Registre_Deces",type:DECES},
        {category:"mariage",to:"Registre_Mariage",type:MARIAGE},
    ];
    const CreateCategories=[
        {category:"",to:"Create"},
        {category:"registre",to:"Create_Registre",type:REGISTRE},
        {category:"acte",to:"Create_Acte",type:ACTE},
    ]
    const AuthValidRoutes=useRoutes([
        {
            path:"/",
            element:
            <>
                <Navbar to="home" /> 
                <Home />
            </>
        },
        {
            path:"/profile",
            element:
            <>
                <Navbar /> 
                <Profile /> 
            </>
        },
        
        {
            path:"/registre",
            children:Registres.map(registre=>{
                return {
                    path:registre.category,
                    children:[
                        {
                            index:true,
                            element:
                            <>
                                <Navbar to={registre.to} /> 
                                <RegistreActes registres type={registre.type} />
                            </>
                        },
                        {
                            path:"registre/:id",
                            element: 
                            <>
                                <Navbar  /> 
                                <RegistreActes singleRegistre type={registre.type} />
                            </>
                        },
                        {
                            path:"acte/:id",
                            element: 
                            <>
                                <Navbar  /> 
                                <RegistreActes acte type={registre.type} />
                            </>
                        }
   
                    ]
                  
                }
            })
        },
        {
            path:"/create",
            children:CreateCategories.map(element=>{
                return {
                    path:element.category,
                    children:[
                        {
                            index:true,
                            element:
                            <>
                                <Navbar to={element.to} /> 
                                <Create type={element.type}/> 
                            </>
                        }
                    ]
                  
                }
            })
        },
        {
            path:"*",
            element:
            <>
                <Navbar to="NotFound" /> 
                <NotFound />
            </>
        },
    ])
    return  AuthValidRoutes;  
}

export default AuthValidRoutes
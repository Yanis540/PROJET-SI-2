
import {toast} from 'react-toastify'
import { ACTIONS } from '../../../state/StateProvider.js';
const{
    SET_USER
}=ACTIONS
async function handleLogin({data,dispatch,setForm}) {
    try{

        if(!data) return 
        const {user,accessToken,refreshToken,expiresIn}=data
        dispatch({
            type:SET_USER,
            user:{...user,accessToken,refreshToken,expiresIn}
        })
        setForm({
            email:'',
            password:''
        })
    }
    catch(err){
        toast.error(err.message)
    }
}

export default handleLogin
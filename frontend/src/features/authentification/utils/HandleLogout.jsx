import { ACTIONS } from '../../../state/StateProvider';
const {
    SET_USER
}=ACTIONS
function HandleLogout(dispatch,navigate) {
    navigate('/');
    
    dispatch({
        type:SET_USER,
        user:null
    })
}

export default HandleLogout
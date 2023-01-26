import { ACTIONS } from '../../../state/StateProvider.js';
const{
    SET_VALID_USER_STATUS
}=ACTIONS

const handleValidateUser=(dispatch)=>{
    dispatch({
        type:SET_VALID_USER_STATUS
    })
}
export default handleValidateUser
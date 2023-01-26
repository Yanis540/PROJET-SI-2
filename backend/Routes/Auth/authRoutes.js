import express from 'express'
import { 
    authRefresh ,
    authUser,
    authValidation

} from '../../middlwares/authMiddlware.js';


import { 
    login_controller, 
    refreshToken_controller, 
    register_controller ,
    send_validation,
    validate_user
} from './controllers/basicController.js';
const router=express.Router();

router.post('/login',login_controller)
router.get('/refresh/token',authRefresh,refreshToken_controller)
router.post('/register',register_controller)
router.get('/send/validation',authUser,send_validation)
router.get('/validate/user',authUser,authValidation,validate_user)
export default router;
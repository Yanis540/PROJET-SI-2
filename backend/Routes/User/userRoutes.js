import express from "express";
import { authUser, authMaire } from "../../middlwares/authMiddlware.js";

import {
    update_user ,
    update_mayor
}from './controllers/basicController.js'



const router=express.Router();


router.put('/update',authUser,update_user);
router.put('/maire/update',authUser,authMaire,update_mayor)



export default router; 
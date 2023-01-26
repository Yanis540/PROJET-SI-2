import express from 'express'
import { 
    authUser
} from '../../middlwares/authMiddlware.js';
import {
    create_register,
    get_registers,
    get_single_register,
    update_register
} from "./controllers/basicController.js"
import {
    create_status,
    delete_status,
    get_single_status,
    get_stats,
    get_status_by_category,
    get_status,
    update_status,
}  from "./controllers/basicController.js"
const router=express.Router();

router.put("/status/get/single/:id",authUser,get_single_status);
router.get("/status/stats",authUser,get_stats);
router.put("/status/get/category",authUser,get_status_by_category);
router.get("/status/get",authUser,get_status);
router.post("/status/create",authUser,create_status);
router.delete("/status/delete/:id",authUser,delete_status);
router.put("/status/update/:id",authUser,update_status);


//! register 
router.get("/register/get",authUser,get_registers);
router.put("/register/get/single/:id",authUser,get_single_register);
router.post("/register/create",authUser,create_register);
router.put("/register/update/:id",authUser,update_register);
export default router; 
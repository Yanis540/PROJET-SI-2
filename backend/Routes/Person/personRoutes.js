import express from 'express'
import { 
    authUser
} from '../../middlwares/authMiddlware.js';

import {
    create_person,
    delete_person,
    get_persons,
    update_person,
}  from "./controllers/basicController.js"
const router=express.Router();

router.post("/create",authUser,create_person);
router.delete("/delete/:NIN",authUser,delete_person);
router.get("/get/persons",authUser,get_persons);
router.put("/update/:NIN",authUser,update_person);



export default router; 
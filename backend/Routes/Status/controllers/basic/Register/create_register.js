import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client';
import {ARRAY_STATUS} from "../Status/types/StatusTypes.js";

const prisma = new PrismaClient();

/**
 * @function creates register for the user 
 */
const create_register=asyncHandler(async(req,res)=>{
    const {type_registre,}=req.body;
    if(!type_registre) throw new Error("type de  registre obligatoire");
    if(!ARRAY_STATUS.some(type=>type===type_registre)) throw new Error("Type de registre invalide ");
    const year=new Date().getFullYear();
    const registreExistant=await prisma.registre.findFirst({
        where:{
            annee:year,
            type_registre:type_registre,
            num_commune:req.user.num_commune
        }
    });
    if(registreExistant) throw new Error(`Registre de ${type_registre} l'année déjà existant `);
    const registre=await prisma.registre.create({
        data:{
            annee:year,
            type_registre:type_registre,
            num_commune:req.user.num_commune
        }
    })
    res.json({message:"Registre Crée ! "})
})

export default create_register
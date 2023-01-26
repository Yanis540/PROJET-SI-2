import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client';
import {ARRAY_STATUS} from "../types/StatusTypes.js"
import { StatusSchema, Transcription } from '../Schema/StatusSchemas.js';

const prisma = new PrismaClient();
/**
 * @param {*} registres : les actes sont retournées par registres 
 */
const get_status_by_category=asyncHandler(async(req,res)=>{
    const {type_acte}=req.body;
    if(!type_acte) throw new Error("Type activité manquant");
    if(!ARRAY_STATUS.some(type=> type===type_acte)) throw new Error("Type acte non trouvé");
    const registres=await prisma.registre.findMany({
        where:{
            // // num_commune:req.user.num_commune,
            type_registre:type_acte
        },
        orderBy:{
            annee:'desc'
        },
        
        include:{
            actes:{
                where:{
                    type:type_acte,
                    OR:Transcription(req.user)
                },
                orderBy:{
                    date:'desc'
                },
                include:{...StatusSchema.include,registre:false},
                
            }
        }
    })
    const filteredRegistres = registres.filter(registre=>
        registre.num_commune==req.user.num_commune ||
        registre.actes.length!=0
    )
    res.json({registres:filteredRegistres});
})

export default get_status_by_category
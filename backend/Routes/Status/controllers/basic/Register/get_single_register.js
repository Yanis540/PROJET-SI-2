import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
import { StatusSchema, Transcription } from '../Status/Schema/StatusSchemas.js';
import { REGISTRE_NOT_FOUND } from '../../../../../error/errorTypes.js';
import { ARRAY_STATUS } from '../Status/types/StatusTypes.js';
const prisma = new PrismaClient();
/**
 * @function gets a single register by id of a user  
 */
const get_single_register=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const {type_registre}=req.body;
    if(!type_registre
     ||!ARRAY_STATUS.some(status => status === type_registre)
    ) throw new Error("Type Registre Non valid ",{cause:REGISTRE_NOT_FOUND})
    if(!id) throw new Error("ID not found",{cause:REGISTRE_NOT_FOUND});
    const registre=await prisma.registre.findFirst({
        where:{
            // num_commune:req.user.num_commune,
            num_registre:id, 
            type_registre:type_registre
        },
        include:{
            actes:{
                where:{
                    OR:Transcription(req.user),
                },
                orderBy:{
                    date:"desc"
                },
                include:{...StatusSchema.include,registre:false},
            }
        }
    })
    if(!registre) throw new Error(`Pas de registre de ${type_registre} avec numéro: ${id}`,{cause:REGISTRE_NOT_FOUND});
    res.json({registre});
})

export default get_single_register
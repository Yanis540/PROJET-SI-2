import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
import { SingleStatusSchema, Transcription } from '../Schema/StatusSchemas.js';
import { ACTE_NOT_FOUND } from '../../../../../../error/errorTypes.js';
import { ARRAY_STATUS } from '../types/StatusTypes.js';
import createActePdf from './functions/Print/createActePdf.js';
const prisma = new PrismaClient();
const get_single_status=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const {type_acte}=req.body;
    if(!ARRAY_STATUS.some(type=> type===type_acte)) throw new Error("Type Acte Non reconnu",{cause:ACTE_NOT_FOUND})
    if(!id) throw new Error("Not COOL ");
    if(!type_acte)throw new Error("Type Acte obligatoire ",{cause:ACTE_NOT_FOUND})
    const acte=await prisma.acte.findFirst({
        where:{
            num_acte:id,
            OR:Transcription(req.user),
            type:type_acte
        },
        include:SingleStatusSchema.include
        
    });
    if(!acte) throw new Error(`No ${type_acte} Status with id ${id} `,{cause:ACTE_NOT_FOUND});
    const pdfData=await createActePdf({acte});
    res.json({acte,pdfData})
})

export default get_single_status
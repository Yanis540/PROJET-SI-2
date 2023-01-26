import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const update_person=asyncHandler(async(req,res)=>{
    const {nom,prenom,CNI}=req.body;
    const {NIN}=req.params;
    if(isNaN(parseInt(NIN))||(CNI && isNaN(parseInt(CNI)))) throw new Error("NIN/CNI should be numbers")
    const exists=await prisma.personne.findUnique({
        where:{NIN:parseInt(NIN)}
    });
    if(!exists) throw new Error(`Person with NIN : ${NIN} doesn't exist `);
    const personUpdated=await prisma.personne.update({
        where:{NIN:parseInt(NIN)},
        data:{
            nom:nom??undefined,
            prenom:prenom??undefined,
            CNI:CNI?parseInt(CNI):undefined,
        }
    });

    res.json({message:"Person updated ! ",person:{...personUpdated}})
})

export default update_person
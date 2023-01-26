import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const delete_person=asyncHandler(async(req,res)=>{
    const {NIN}=req.params;
    if(isNaN(parseInt(NIN))) throw new Error("NIN/CNI should be numbers")
    const exists=await prisma.personne.findUnique({
        where:{NIN:parseInt(NIN)}
    });
    if(!exists) throw new Error(`Person with NIN : ${NIN} doesn't exist `);
    const personDeleted=await prisma.personne.delete({ where:{NIN:parseInt(NIN)}});
    res.json({message:"Person Deleted !",person:{...personDeleted}})
})

export default delete_person
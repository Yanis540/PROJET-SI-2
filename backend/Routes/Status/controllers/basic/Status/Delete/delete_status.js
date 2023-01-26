import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const delete_status=asyncHandler(async(req,res)=>{
    const {id}=req.params; 
    if(!id) throw new Error(`No id `);
    const acte=await prisma.acte.findUnique({
        where:{
            num_acte:id
        }
    });
    if(!acte )throw new Error(`Pas d'acte avec numéro ${id}`);
    // deleting the record 
    await prisma.acte.delete({
        where:{
            num_acte:id
        }
    });
    res.json({message:"Acte supprimé",acte:{...acte}});
})

export default delete_status
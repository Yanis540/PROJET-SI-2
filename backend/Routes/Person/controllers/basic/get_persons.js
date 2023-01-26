import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const get_persons=asyncHandler(async(req,res)=>{
    const persons=await prisma.personne.findMany();
    res.json({persons})
})

export default get_persons
import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const get_registers=asyncHandler(async(req,res)=>{
    
    const registers=await prisma.registre.findMany({
        where:{
            num_commune:req.user.num_commune
        },
        include:{
            commune:{
                include:{
                    ville:true
                }
            }
        }
    })||[];
    res.json({registers});
})

export default get_registers
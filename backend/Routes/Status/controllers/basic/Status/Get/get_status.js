import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client';
import { StatusSchema } from '../Schema/StatusSchemas.js';

const prisma = new PrismaClient();

const get_status=asyncHandler(async(req,res)=>{
    const registres=await prisma.registre.findMany({
        where:{
            num_commune:req.user.num_commune,
        },
        orderBy:{
            annee:'desc'
        },
        include:{

            actes:{
                orderBy:{
                    date:"desc"
                },
                include:{...StatusSchema.include,registre:false},
            }
        }
    })
    res.json({registres});
})

export default get_status
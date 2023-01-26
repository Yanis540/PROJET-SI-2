
import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const validate_user=asyncHandler(async(req,res)=>{
    const user=req.user ; 
    if(user.isValid) throw new Error('User Is Already Valid !');
    //! code to send email 
    //! validate user 
    const updatedUser=await prisma.officier.update({
        where:{
            matricule:req.user.id
        },
        data:{
            isValid:true
        }
    })
    res.json({isValid:true,message:'User Is Valid'})
})

export default validate_user
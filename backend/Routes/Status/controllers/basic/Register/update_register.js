import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const update_register=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    let {year:yearString=null}=req.body;
    const year=parseInt(yearString);
    if(!id) throw new Error("NO ID ");
    if(isNaN(year)) throw new Error("No year added");
    const registExists=await prisma.registre.findFirst({
        where:{
            num_registre:id , 
            num_commune:req.user.num_commune
        }
     })  
    if(! registExists )throw new Error(`No register with ID : ${id}`) ;
    const registerUpdated=await prisma.registre.update({
        where:{
            num_registre:id
        },
        data:{
            annee:year
        }
    });

    res.json({message:"Registre mis à jours "})

})

export default update_register
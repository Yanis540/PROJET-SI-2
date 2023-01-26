import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const create_person=asyncHandler(async(req,res)=>{
    const {NIN,CNI,nom,prenom}=req.body;
    if(
        !NIN||isNaN(parseInt(NIN))||
        !CNI||isNaN(parseInt(CNI))||
        !nom?.trim()||!prenom?.trim()
    )throw new Error("Informations Invalide");
    const exists=await prisma.personne.findUnique({
        where:{
            NIN:parseInt(NIN)
        }
    });
    if(exists) throw new Error(`Person with NIN : ${NIN} already exists in the database`);
    const person=await prisma.personne.create({
        data:{
            NIN:parseInt(NIN),
            CNI:parseInt(CNI),
            nom,
            prenom
        }
    })
    res.json({message:"Person Created !",person:{...person}});
})

export default create_person
import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
import { STATUS } from '../types/StatusTypes.js';
import UpdateActeNaissance from './Update/UpdateActeNaissance.js';
import UpdateActeDeces from './Update/UpdateActeDeces.js';
import UpdateActeMariage from './Update/UpdateActeMariage.js';
import { StatusSchema } from '../Schema/StatusSchemas.js';
const prisma = new PrismaClient();

const{
    NAISSANCE,
    DECES,
    MARIAGE
}
=STATUS
const update_status=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const {
        list_declarants,lieu,date,
        //!décès
        num_acte_naissance_personne_decede,
        //!mariage
        numero_acte_naissance_mari,numero_acte_naissance_femme,list_temoins,
        //!naissance
        numero_acte_naissance_pere,numero_acte_naissance_mere,sexe,profession

    }=req.body;
    if(!id) throw new Error(`Pas d'acte avec le id ${id}`);
    const acteExist=await prisma.acte.findFirst({ where:{ num_acte:id} });
    if(!acteExist) throw new Error(`Pas d'acte avec le id ${id}`);
    if(acteExist.num_commune !== req.user.num_commune) throw new Error("Unauthorized");
    switch(acteExist.type){
        case NAISSANCE:
            await UpdateActeNaissance({
                id , sexe , profession,
                numero_acte_naissance_pere , numero_acte_naissance_mere,
                lieu , date , list_declarants
            })
            break;
        case DECES:
            await UpdateActeDeces({ 
                id,
                num_acte_naissance_personne_decede,
                lieu,
                date,
                list_declarants
            })
            break;
        case MARIAGE:
            await UpdateActeMariage({
                id,
                numero_acte_naissance_femme,numero_acte_naissance_mari,
                lieu,date,
                list_temoins,list_declarants
            })
            break;
    }
    const updatedActe=await prisma.acte.findFirst({
        where:{num_acte:id,num_commune:req.user.num_commune,},
        include:StatusSchema.include
    });
    
    res.json({message:"Acte mis à jours ! ",acte:{...updatedActe}})
})

export default update_status
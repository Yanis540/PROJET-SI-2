import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
import {STATUS} from "../types/StatusTypes.js"
import getNombreActesParAnnee from './functions/getNombreActesParAnnee.js';


const {
  NAISSANCE,
  MARIAGE,
  DECES
}=STATUS
const prisma = new PrismaClient();
const get_stats=asyncHandler(async(req,res)=>{
   

    //! Année courante
    const actesAnneeParTypes=await prisma.$queryRaw`
        SELECT r.type_registre,count(a.num_acte)::int as _count from public."Registre" r, public."Acte" a 
           where a.num_registre=r.num_registre 
           and r.annee=${new Date().getFullYear()}
           and a.num_commune=r.num_commune
           and a.num_commune=${req.user.num_commune}
           group by r.type_registre
        ;
    `;
    const actesAnneeParMois_types=await prisma.$queryRaw`
        select to_char(a.date, 'YYYY-MM') as date , type , count(*)::int as _count from  public."Acte" a 
            where to_char(a.date, 'YYYY') = ${new Date().getFullYear().toString()}
            group by to_char(a.date, 'YYYY-MM') ,type
        ; 
    `;
    //! Actes par année et par catégories
    const actesNaissanceAnnuel=await getNombreActesParAnnee({type_acte:'NAISSANCE',user:req.user});
    const actesMariageAnnuel=await getNombreActesParAnnee({type_acte:'MARIAGE',user:req.user});
    const actesDecesAnnuel=await getNombreActesParAnnee({type_acte:'DECES',user:req.user});
    
    //! Actes Naissances par lieu 
    const actesNaissanceParLieu=await prisma.acte.groupBy({
        where:{
           num_commune:req.user.num_commune,
           type:NAISSANCE
        },
        by:['lieu'],
        _count:true
    });
    //! Actes Mariage par lieu 
   
    const actesMariageParLieu=await prisma.acte.groupBy({
        where:{
           num_commune:req.user.num_commune,
           type:MARIAGE
        },
        by:['lieu'],
        _count:true
    });




    res.json({
        actesAnneeParTypes,
        actesAnneeParMois_types,
        actesAnnuel:{
            actesNaissanceAnnuel,
            actesMariageAnnuel,
            actesDecesAnnuel
        },
        actesNaissanceParLieu,
        actesMariageParLieu,
    })
})

export default get_stats
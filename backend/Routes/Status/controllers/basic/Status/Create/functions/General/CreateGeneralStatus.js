
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export const CreateGeneralStatus=async({
    user,
    type_acte,
    date,
    lieu,
    list_declarants=[],
})=>{
    const annee=date?new Date(date).getFullYear():new Date().getFullYear();
    const registre=await prisma.registre.findFirst({
        where:{
            annee:annee,
            num_commune:user.num_commune,
            type_registre:type_acte
        }
    });
    const acte=await prisma.acte.create({
        data:{
            date:date?new Date(date):new Date(),
            lieu:lieu?.trim(),
            type:type_acte,
            officier:{
                connect:{
                    matricule:user.id
                }
            },
            commune:{
                connect:{
                    num_commune:user.num_commune
                }
            },
            registre:{
                connect:{
                    num_registre:registre.num_registre
                }
            },
            declarations:{
                connect: list_declarants.map(declarant=>({...declarant,NIN:parseInt(declarant.NIN)}))
            },
        }
    });
    return acte; 
}

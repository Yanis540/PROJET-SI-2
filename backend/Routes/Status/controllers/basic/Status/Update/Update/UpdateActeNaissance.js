import { PrismaClient } from '@prisma/client'
import checkActeNaissance from './functions/checkActeNaissance.js';
import validateDate from './functions/validateDate.js';
const prisma = new PrismaClient();
const UpdateActeNaissance =async(data)=>{
    const {
        id,
        sexe,
        profession,
        numero_acte_naissance_pere,
        numero_acte_naissance_mere,
        lieu,
        date,
        list_declarants
    }=data;
    if(numero_acte_naissance_pere)
        await checkActeNaissance(numero_acte_naissance_pere);
    if(numero_acte_naissance_mere)
        await checkActeNaissance(numero_acte_naissance_mere);
    if(date)
        validateDate(date)
    ;
       

    return await prisma.acteNaissance.update({
        where:{
            num_acte:id
        },
        data:{
            sexe:sexe?.trim().length?sexe.trim():undefined,
            profession:profession?.trim().length?profession.trim():undefined,
            pere:numero_acte_naissance_pere?.trim()?{
                connect:{
                    num_acte:numero_acte_naissance_pere
                }
            }:{},
            mere:numero_acte_naissance_mere?.trim()?{
                connect:{
                    num_acte:numero_acte_naissance_mere
                }
            }:{},
            acte:{
                update:{
                    lieu:lieu?.trim()?.length?lieu.trim():undefined,
                    date:date?.trim()?.length?new Date(date):undefined,
                    declarations:list_declarants?.length?list_declarants:undefined,
                }
            }
        },
        include:{
            acte:true
        }
    });
}
export default UpdateActeNaissance;
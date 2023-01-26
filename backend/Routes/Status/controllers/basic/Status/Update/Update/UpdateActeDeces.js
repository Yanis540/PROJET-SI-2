import { PrismaClient } from '@prisma/client'
import validateDate from './functions/validateDate.js';
import checkActeNaissance from './functions/checkActeNaissance.js';

const prisma = new PrismaClient();

const UpdateActeDeces =async(data)=>{
    const {
        id,
        num_acte_naissance_personne_decede,
        lieu,
        date,
        list_declarants
    }=data;
    if(num_acte_naissance_personne_decede)
        await checkActeNaissance(num_acte_naissance_personne_decede);
    if(date)
        validateDate(date);
    return await prisma.acteDeces.update({
        where:{
            num_acte:id
        },
        data:{
            acte_naissance:num_acte_naissance_personne_decede?.trim()?{
                connect:{
                    num_acte:num_acte_naissance_personne_decede
                }
            }:{},
         
            acte:{
                update:{
                    lieu:lieu?.trim()?.length?lieu.trim():undefined,
                    date:date?.trim()?.length?date:undefined,
                    declarations:list_declarants?.length?list_declarants:undefined,
                }
            }
        },
        include:{
            acte:true,
            acte_naissance:true
        }
    });
}
export default UpdateActeDeces;
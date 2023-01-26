import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export const CreateActeDeces=async(data)=>{
    const {
        acte,
        num_acte_naissance_personne_decede
    }=data;
    try{
        return await prisma.acteDeces.create({
            data:{
                acte:{
                    connect:{
                        num_acte:acte.num_acte
                    }
                },
                acte_naissance:{
                    connect:{
                        num_acte:num_acte_naissance_personne_decede
                    }
                }
            }
        })
    }
    catch(err){
        await prisma.acte.delete({
            where:{
                num_acte:acte.num_acte
            }
        })
        throw new Error("An error Happened : "+err.message);
    }
    
}
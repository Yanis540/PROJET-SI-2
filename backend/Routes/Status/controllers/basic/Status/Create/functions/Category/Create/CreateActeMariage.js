import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export const CreateActeMariage=async(data)=>{
    const {
        acte,
        mariage,
        list_temoins
    }=data;
    try{
        return await prisma.acteMariage.create({
            data:{
                acte:{
                    connect:{
                        num_acte:acte.num_acte
                    }
                },
                acte_naissance_mari:{
                    connect:{
                        num_acte:mariage.numero_acte_naissance_mari
                    }
                },
                acte_naissance_femme:{
                    connect:{
                        num_acte:mariage.numero_acte_naissance_femme
                    }
                },
                temoignages:{
                    connect:list_temoins.map(temoin=>({...temoin,NIN:parseInt(temoin.NIN)}))
                    
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
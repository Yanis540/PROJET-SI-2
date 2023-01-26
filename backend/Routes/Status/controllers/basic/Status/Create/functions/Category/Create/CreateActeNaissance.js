import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export const CreateActeNaissance=async(data)=>{
    const {
        sexe,
        acte,
        profession,
        parents,
        nom_nouveau_ne,
        prenom_nouveau_ne,
    }=data;
    try{
        return await prisma.acteNaissance.create({
            data:{
                acte:{
                    connect:{
                        num_acte:acte.num_acte
                    }
                },
                
                sexe:sexe,
                profession:profession,
               
                pere:{
                    connect:{
                        num_acte:parents?.numero_acte_naissance_pere??undefined,
                    }
                },
                mere:{
                    connect:{
                        num_acte:parents?.numero_acte_naissance_mere??undefined,
                    }
                },
                nom:nom_nouveau_ne,
                prenom:prenom_nouveau_ne
            },
            include:{
                acte:true
                
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
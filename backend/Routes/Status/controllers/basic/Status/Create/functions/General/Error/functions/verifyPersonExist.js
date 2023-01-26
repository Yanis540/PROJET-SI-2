import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


const verifyPersonExist=async(list=[])=>{
    if(list?.some(declarant => (!(declarant.NIN)||isNaN(parseInt(declarant.NIN))))) throw new Error("Declarant Invalide");
    for(const personne of list){
        if(
            !await prisma.personne.findUnique({where:{NIN:parseInt(personne.NIN)}})
        ) 
            throw new Error(`Invalide NIN ${personne.NIN}`);
    }
}

export default verifyPersonExist;
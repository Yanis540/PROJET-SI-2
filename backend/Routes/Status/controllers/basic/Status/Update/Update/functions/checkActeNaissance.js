
import { PrismaClient } from '@prisma/client'
import { ACTE_NOT_FOUND } from '../../../../../../../../error/errorTypes.js';

const prisma = new PrismaClient();

const checkActeNaissance=async(numero_acte_naissance)=>{
    if(!await prisma.acteNaissance.findUnique({where:{num_acte:numero_acte_naissance}}))
        throw new Error(`Numero Acte naissance  ${numero_acte_naissance} n'existes pas`,{cause:ACTE_NOT_FOUND}) ;

}

export default checkActeNaissance
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const getNombreActesParAnnee=async({type_acte,user})=>await prisma.$queryRaw`
  SELECT r.annee,count(a.num_acte)::int as _count from public."Registre" r, public."Acte" a 
    where a.num_registre=r.num_registre 
    and a.num_commune=r.num_commune
    and r.type_registre::character varying=${type_acte.toString()}::character varying
    and a.num_commune=${user.num_commune}
    group by r.annee
 ;
`

export default getNombreActesParAnnee;
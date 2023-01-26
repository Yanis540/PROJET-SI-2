import aysncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const update_mayor=aysncHandler(async(req,res)=>{
    const {nouveau_maire}=req.body;
    
    const officier=await prisma.officier.findFirst({
        where:{
            matricule:parseInt(nouveau_maire),
            num_commune:req.user?.num_commune
        }
    });
    if(!officier)throw new Error(`Pas d'officiers avec matricule ${nouveau_maire}`);
    if(!officier?.isValid) throw new Error(`L'officier avec le matricule ${nouveau_maire} n'a pas validé son email`);
    const nouveauMaire=await prisma.officier.update({
        where:{
            matricule:parseInt(nouveau_maire)
        },
        data:{
            role:"MAIRE"
        }
    });
    const updatedUser= await prisma.officier.update({
        where:{
            matricule:req.user.id
        },
        data:{
            role:"OFFICIER"
        },
        include:{
            commune:{
                include:{
                    ville:true
                }
            }
        }
    });
    const delege=await prisma.delegation.create({
        data:{
            maire:{
                connect:{
                    matricule:req.user.id
                }
            },
            nouveau_maire:{
                connect:{
                    matricule:parseInt(nouveau_maire)
                }
            }
        }
    })
    const user={...updatedUser,id:updatedUser.matricule}
    res.json({message:"Vous n'êtes plus le maire  ! ",user:{
        id:user.id,
        isValid:user.isValid,
        nom:user.nom,
        prenom:user.prenom,
        email:user.email,
        date_entree:user.date_entree,
        photo:user.photo,
        num_commune:user.num_commune,
        role:user.role,
        commune:user.commune
    },})
});
export default update_mayor
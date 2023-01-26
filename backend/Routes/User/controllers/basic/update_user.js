import aysncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const update_user=aysncHandler(async(req,res)=>{
    const {photo}=req.body; 
    let updatedUser;
    try{
        updatedUser=await prisma.officier.update({
            where:{
                matricule:req.user.id
            },
            data:{
                photo:photo? Buffer.from(photo):undefined
            },
            include:{
                commune:{
                    include:{
                        ville:true
                    }
                }
            }
        })
    }catch(err){
        throw new Error("Error Updating ! "+err.message);
    }
    const user={...updatedUser,id:updatedUser.matricule}
    res.json({message:"Profil à jour ! ",user:{
        id:user.id,
        isValid:user.isValid,
        nom:user.nom,
        prenom:user.prenom,
        email:user.email,
        date_entree:user.date_entree,
        photo:user.photo?Buffer.from(user?.photo):null,
        num_commune:user.num_commune,
        role:user.role,
        commune:user.commune
    },})
});
export default update_user
import asyncHandler from 'express-async-handler';
import { INVALID_REFRESH_TOKEN,REFRESH_TOKEN_UNAUTHORIZED } from "../../error/errorTypes.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
/**
 * 
 * @function Verify if refresh token is valid  
 * @error  {message,cause}
 * @errorTypes {INVALID_REFRESH_TOKEN,REFRESH_TOKEN_UNAUTHORIZED}
 * 
 */
const authMaire=asyncHandler(async(req,res,next)=>{


        //! GET USER FROM DATABASE 
    let user=await prisma.officier.findUnique({
        where:{
            matricule:req?.user?.id
        },
    });
    if(!user||user.role!=="MAIRE") throw new Error("Unauthorized Mayor Only ! ") 
    //! verify if token exists 
    next()


})
export default authMaire
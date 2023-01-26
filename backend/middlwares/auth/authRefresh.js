// import Token from "../../models/tokenModel.js";
// import User from "../../models/userModel.js";
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken'
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
const authRefresh=asyncHandler(async(req,res,next)=>{
    let token;
    try{
        if(!req.headers|| ! req.headers.authorization || ! req.headers.authorization.startsWith('Bearer') ) throw new Error('Unauthorized',{cause:NO_REFRESH_TOKEN});
        token=req.headers.authorization.split(' ')[1]
        let decode;
        try{
            decode=jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
        }
        catch(err){
            throw new Error('Session Expired',{cause:INVALID_REFRESH_TOKEN})
        }
        //! GET USER FROM DATABASE 
        let user=await prisma.officier.findUnique({
            where:{
                matricule:decode.id
            },
        })
        if(!user) throw new Error('Invalid User ',{cause:REFRESH_TOKEN_UNAUTHORIZED})
        user={...user,id:user.matricule}
        delete user.matricule;
        //! verify if token exists 
        const tokenFromDb=await prisma.token.findUnique({where:{token:token}})
        if(!tokenFromDb) throw new Error('Unauthorized',{cause:REFRESH_TOKEN_UNAUTHORIZED})

 
        req.user=user;
        next()
    }
    catch(err){
        throw new Error(err.message,{cause:err.cause})
    }

})
export default authRefresh
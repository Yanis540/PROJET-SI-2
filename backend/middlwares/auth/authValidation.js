// import Token from "../../models/tokenModel.js";
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken'
import { 
    INVALID_VALIDATION_TOKEN, 
    VALIDATION_TOKEN_UNAUTHORIZED , 
    VALIDATION_TOKEN_MISMATCH 
} from "../../error/errorTypes.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
/*** 
 * DOES: validates the token of the user 
 * authUser Should Be Before 
 */
/**
 * 
 * @function Verify if validation Token is valid 
 * @error  {message,cause}
 * @errorTypes {INVALID_VALIDATION_TOKEN,VALIDATION_TOKEN_UNAUTHORIZED,VALIDATION_TOKEN_MISMATCH}
 * 
 */
 const authValidation=asyncHandler(async(req,res,next)=>{
    let token;
    try{
        token=req.query.token;
        if(!token) throw new Error('Unauthorized')

        const user=req.user;
        let decode;
        try{

            decode=jwt.verify(token,process.env.VALIDATION_TOKEN_SECRET)
        }
        catch(err){
            throw new Error(' Invalid / Expired Token',{cause:INVALID_VALIDATION_TOKEN})
        }
        if(decode.id !== user?.id) throw new Error('Token Mismatch',{cause:VALIDATION_TOKEN_MISMATCH})
        //! VERIFY IF THE TOKEN IS SET ON THE DATABASE IF NOT THROW AN ERROR 
        const tokenFromDb=await prisma.token.findUnique({where:{token:token}})
        if(!tokenFromDb) throw new Error('Unauthorized',{cause:VALIDATION_TOKEN_UNAUTHORIZED})

        next()
    }
    catch(err){
        throw new Error(err.message,{cause:err.cause})
    }

})
export default authValidation
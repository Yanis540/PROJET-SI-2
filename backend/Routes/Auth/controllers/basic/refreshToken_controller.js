import {  generateAccessToken } from '../../../../token/generateToken.js';
import asyncHandler from 'express-async-handler';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const refreshToken_controller=asyncHandler(async(req,res)=>{
    const user=req.user; 
    const {accessToken,expiresIn}=generateAccessToken(user.id)
    const ipAddress=req.socket.remoteAddress

    //! save accessToken
    try{
        const token=await prisma.token.create({
            data:
                {
                    token:accessToken,
                    expiresIn:new Date(expiresIn),
                    matricule:user?.id,
                    ipAddress,
                    type:"ACCESS"
                }
        })
    }catch(err){
        throw new Error("Error Saving token");
    }

    res.json({
        accessToken,
        expiresIn
    })

})

export default refreshToken_controller